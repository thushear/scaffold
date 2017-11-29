package com.github.thushear.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource(locations = {"classpath:spring-config.xml"})
public class XMLConfiguration {
}
