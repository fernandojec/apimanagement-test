export interface MenuTypes {
  id: number;
  sequence: number;
  is_parent_menu: boolean;
  parent_id: number;
  menu_name: string;
  url: string;
  is_add_able: boolean;
  is_edit_able: boolean;
  is_delete_able: boolean;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface UserTypes {
  id?: string;
  active_date?: string,
  api_key?: string,
  city?: string,
  company?: string,
  company_position?: string,
  country?: string,
  created_at?: string,
  created_by?: string,
  deleted_at?: string,
  description?: string,
  email?: string,
  expire_date?: string,
  first_name?: string,
  group_id?: number,
  group_name?: string,
  ip_allowed?: string,
  is_active?: boolean,
  is_desktop_notification?: boolean,
  is_email_notification?: boolean,
  is_vip?: boolean,
  last_name?: string,
  phone?: string,
  profile_picture?: string,
  quota_request_per_day?: number,
  updated_at?: string,
  updated_by?: string,
  user_create?: number,
  user_create_name?: string,
  user_name?: string,
  user_update?: number,
  user_update_name?: string,
  zipcode?: string
}

export interface UserLoginTypes {
  exp?: number,
  iat?: number,
  iss?: string,
  jti?: string,
  nbf?: number,
  id: string,
  user_id: string,
  user_name?: string,
  email?: string,
  uuid?: string,
  password?: string
}


export interface ModuleTypes {
  alias?: string,
  category_id?: number,
  category_name?: string,
  created_at?: string,
  description?: string,
  id?: number,
  is_active?: boolean,
  name?: string,
  profile_picture?: string,
  updated_at?: string,
  user_create?: number,
  user_create_name?: string,
  user_update?: number,
  user_update_name?: string
}


export interface ModulePICTypes {
  created_at?: string,
  id?: number,
  is_add_able?: boolean,
  is_delete_able?: boolean,
  is_edit_able?: boolean,
  module_id?: number,
  module_name?: string,
  updated_at?: string,
  user_create?: number,
  user_create_name?: string,
  user_id?: number,
  user_name?: string,
  user_update?: number,
  user_update_name?: string,
  item_status?: string
}

export interface submoduleTypes{
  alias?: string,
  created_at?: string,
  description?: string,
  id?: number,
  is_active?: boolean,
  module_id?: number,
  module_name?: string,
  name?: string,
  link_connection?: { items?: { label?: string; value?: any; } | undefined},
  submodule_api_id?: [
      number
  ],
  submodule_sp_id?: [
      number
  ],
  type?: string,
  updated_at?: string,
  user_create?: number,
  user_create_name?: string,
  user_update?: number,
  user_update_name?: string,
  isActiveUserSub?: boolean
}

export interface submoduleapiTypes{
  body_type?: string,
  created_at?: string,
  header?: {
    items?: [
      {
        key?: string,
        value?: string
      }
    ]
  },
  id?: number,
  method?: string,
  parameter_mandatory?: {
    items?: [
      {
        param?: string,
        type?: string
      }
    ]
  },
  parameter_optional?: {
    items?: [
      {
        param?: string,
        type?: string
      }
    ]
  },
  submodule_id?: number,
  submodule_name?: string,
  updated_at?: string,
  url?: string,
  user_create?: number,
  user_create_name?: string,
  user_update?: number,
  user_update_name?: string
}


export interface submodulespTypes{
  created_at?: string,
  id?: number,
  parameter_mandatory?: {
    items?: [
      {
        param?: string,
        type?: string
      }
    ]
  },
  parameter_optional?: {
    items?: [
      {
        param?: string,
        type?: string
      }
    ]
  },
  sp_name?: string,
  submodule_id?: number,
  submodule_name?: string,
  updated_at?: string,
  user_create?: number,
  user_create_name?: string,
  user_update?: number,
  user_update_name?: string
}

export interface userSubmoduleTypes {
  created_at?: string,
  id?: number,
  is_active?: boolean,
  module_id?: number,
  module_name?: string,
  submodule_id?: number,
  submodule_name?: string,
  updated_at?: string,
  user_create?: number,
  user_create_name?: string,
  user_id?: number,
  user_name?: string,
  user_update?: number,
  user_update_name?: string
}

export interface submoduleListTypes {
  alias: string,
  description: string,
  id: number,
  is_active: boolean,
  name: string,
  type: string,
  endpoint: string,
  method: string
}

export interface categoryTypes{
  created_at: string,
  id: number,
  name: string,
  updated_at: string,
  user_create: number,
  user_create_name: string,
  user_update: number,
  user_update_name: string
}

export interface standardreferenceTypes{
created_at: string,
id: number,
name: string,
updated_at: string,
user_create: number,
user_create_name: string,
user_update: number,
user_update_name: string
}

export interface LinkConnectionTypes {
alias?: string,
api_body?: {
  items?: [
    {
      key?: string,
      value?: string
    }
  ]
},
api_domain?: string,
api_header?: {
  items?: [
    {
      key?: string,
      value?: string
    }
  ]
},
created_at?: string,
healthcare?: string,
initial?: string,
is_active?: boolean,
module_id?: number,
sql_dbname?: string,
sql_password?: string,
sql_servername?: string,
sql_username?: string,
type?: string,
updated_at?: string,
user_create?: number,
user_update?: number
}