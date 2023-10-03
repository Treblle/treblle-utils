export interface TrebllePayload {
  api_key: string
  project_id: string
  sdk: string
  version: string | number
  data: {
    server: ServerPayload
    language: LanguagePayload
    request: RequestPayload
    response: ResponsePayload
    errors: Object[]
  }
}

export interface LanguagePayload {
  name: string
  version: string
}

export interface ServerPayload {
  protocol: string
  timezone: string
  os: {
    name: string
    release: string
    architecture: string
  }
  software: null
  signature: null
}

export interface ResponsePayload {
  headers: Object
  code: number | string
  size: number | string
  load_time: number
  body: Object | null
}

export interface RequestPayload {
  ip: string
  url: string
  user_agent: string
  method: string
  headers: Object
  body: Object | null
}

export interface SdkInfo {
  api_key: string
  project_id: string
  sdk: string
  version: string | number
}
