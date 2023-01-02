# NestJS: The Complete Developer's Guide - Udemy Course

Repository for practicing the material thought in **NestJS: The Complete Developer's Guide** course at udemt by **Stephen Grider**. [Udemy Course Link](https://www.udemy.com/course/nestjs-the-complete-developers-guide)

This repository contains the practice projects developed during this course.

## Nest JS concepts

### Basics of NestJS
Every server has the following pattern:

| Pattern | Nest Equivalent |
|--|--|
| Validate incoming data | Pipes |
| Make sure user is authenticated| Guards |
| Route the request to a particular function| Controller|
| Run business logic| Service |
| Access Database| Repository |


#### Validation Pipe
1. class-validation package is used for the validation of DTO
2. class-transformer package is used to transfer incoming JSON object to JS class