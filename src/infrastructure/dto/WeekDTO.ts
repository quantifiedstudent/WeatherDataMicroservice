export interface Permissions {
  can_update_name: boolean;
  can_update_avatar: boolean;
  limit_parent_app_web_access: boolean;
}

export default interface StudentDTO {
  id: number;
  name: string;
  created_at: string;
  sortable_name: string;
  short_name: string;
  avatar_url: string;
  locale: string | null;
  effective_locale: string;
  permissions: Permissions;
}
