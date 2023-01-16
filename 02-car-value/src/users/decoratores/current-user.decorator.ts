import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Custom decorator to get currently logged in user.
// This decorator uses custom interceptor that will
// add currentUser property to incoming requests
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getResponse();
    return request.session.currentUser;
  },
);
