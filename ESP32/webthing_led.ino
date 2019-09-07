#include <Arduino.h>
#include "Thing.h"
#include "WebThingAdapter.h"
#include <WiFi.h>
#include <WiFiClient.h>

#if defined(LED_BUILTIN)
const int ledPin = LED_BUILTIN;
#else
const int ledPin = 13;  // manually configure LED pin
#endif

const char* ssid = "DUDAZEN2G";
const char* password = "jagnidasa";

WebThingAdapter* adapter;

const char* ledTypes[] = {"OnOffSwitch", "Light", nullptr};
ThingDevice led("led", "Built-in LED", ledTypes);
ThingProperty ledOn("on", "Whether the lamp is turned on", BOOLEAN, "OnOffProperty");
ThingProperty lampLevel("level", "The level of light from 0-100", NUMBER, "BrightnessProperty");
ThingProperty limitTime("limitTime", "How much time the lamp can stay turned on", NUMBER, "LimitTimeProperty");

bool lastOn = false;

void setup(void){
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH);
  Serial.begin(115200);
  Serial.println("");
  Serial.print("Connecting to \"");
  Serial.print(ssid);
  Serial.println("\"");
#if defined(ESP8266) || defined(ESP32)
  WiFi.mode(WIFI_STA);
#endif
  WiFi.begin(ssid, password);

  // Wait for connection
  bool blink = true;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println(".");
    digitalWrite(ledPin, blink ? LOW : HIGH); // active low led
    blink = !blink;
  }
  digitalWrite(ledPin, HIGH); // active low led

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  adapter = new WebThingAdapter("led", WiFi.localIP());

  led.addProperty(&ledOn);

  ThingPropertyValue levelValue;
  levelValue.number = 100;
  lampLevel.setValue(levelValue);
  led.addProperty(&lampLevel);

  ThingPropertyValue timeValue;
  timeValue.number = 10;
  limitTime.setValue(timeValue);
  led.addProperty(&limitTime);

  adapter->addDevice(&led);
  adapter->begin();
  Serial.println("HTTP server started");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.print("/things/");
  Serial.println(led.id);
}

void loop(void){
  adapter->update();
  bool on = ledOn.getValue().boolean;
  digitalWrite(ledPin, on ? LOW : HIGH); // active low led
  if (on != lastOn) {
    Serial.print(led.id);
    Serial.print(": ");
    Serial.println(on);
  }
  lastOn = on;
}
