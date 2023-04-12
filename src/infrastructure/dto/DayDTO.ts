export default interface CourseDTO {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: Date;
  grading_standard_id: number;
  is_public: boolean;
  created_at: Date;
  course_code: string;
  default_view: string;
  root_account_id: number;
  enrollment_term_id: number;
  license: string;
  grade_passback_setting: null;
  end_at: null;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  storage_quota_mb: number;
  is_public_to_auth_users: boolean;
  homeroom_course: boolean;
  course_color: null;
  friendly_name: null;
  apply_assignment_group_weights: boolean;
  calendar: Calendar;
  time_zone: string;
  blueprint: boolean;
  template: boolean;
  enrollments: Enrollment[];
  hide_final_grades: boolean;
  workflow_state: string;
  restrict_enrollments_to_course_dates: boolean;
  overridden_course_visibility: string;
}

export interface Calendar {
  ics: string;
}

export interface Enrollment {
  type: string;
  role: string;
  role_id: number;
  user_id: number;
  enrollment_state: string;
  limit_privileges_to_course_section: boolean;
}
