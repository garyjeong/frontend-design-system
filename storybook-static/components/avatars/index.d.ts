import { VariantProps } from 'class-variance-authority';
import { avatarVariants } from './Avatar';
export { Avatar, avatarVariants, type AvatarProps } from './Avatar';
export type AvatarSize = NonNullable<VariantProps<typeof avatarVariants>['size']>;
