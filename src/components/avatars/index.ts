export { Avatar, avatarVariants, type AvatarProps } from './Avatar';
import type { VariantProps } from 'class-variance-authority';
import type { avatarVariants } from './Avatar';
export type AvatarSize = NonNullable<VariantProps<typeof avatarVariants>['size']>;

