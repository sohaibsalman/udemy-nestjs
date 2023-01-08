import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

// interface for type safety of interceptor
interface IClassTransformer {
  new (...args): {};
}

// Custom decorator for serialization
export function Serialize(dto: IClassTransformer) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

// Custom Interceptor
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: IClassTransformer) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: IClassTransformer) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
