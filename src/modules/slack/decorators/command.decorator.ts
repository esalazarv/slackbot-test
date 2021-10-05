import { SetMetadata } from '@nestjs/common';
import { Controller } from '@nestjs/common/interfaces';

export const SLACK_COMMAND = 'slack:command';
export interface SlackCommandMetadata {
  command: string | RegExp;
}

export const OnSlackCommand = (command: string | RegExp) => {
  return (
    target: Controller,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    SetMetadata<string, SlackCommandMetadata>(SLACK_COMMAND, {
      command,
    })(target, propertyKey, descriptor);
  };
};
