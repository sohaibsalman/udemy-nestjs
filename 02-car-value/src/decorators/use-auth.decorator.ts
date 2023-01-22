import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../guards/auth.guard'

export function UseAuth() {
    return UseGuards(AuthGuard);
}