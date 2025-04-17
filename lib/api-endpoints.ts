export interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
}

export interface Error {
  code: string
  message: string
  description: string
}

export interface Endpoint {
  id: string
  category: "users" | "verification" | "documents" | "reports"
  name: string
  method: string
  path: string
  description: string
  parameters?: Parameter[]
  requestExample?: string
  responseExample?: string
  errors?: Error[]
}

export const endpoints: Endpoint[] = [
  {
    id: "verify-user-uae",
    category: "verification",
    name: "Verify User (UAE)",
    method: "POST",
    path: "/verify_user",
    description: "Verifies a user's identity against UAE government databases.",
    parameters: [
      {
        name: "CountryPrefix",
        type: "string",
        required: true,
        description: "Must be 'uae' for this endpoint.",
      },
      {
        name: "IDNumber",
        type: "string",
        required: false,
        description: "UAE Emirates ID number or passport number.",
      },
      {
        name: "FirstName",
        type: "string",
        required: true,
        description: "User's first name as it appears on their ID.",
      },
      {
        name: "MiddleName",
        type: "string",
        required: false,
        description: "User's middle name as it appears on their ID.",
      },
      {
        name: "Surname",
        type: "string",
        required: true,
        description: "User's surname/last name as it appears on their ID.",
      },
      {
        name: "Dob",
        type: "string",
        required: true,
        description: "Date of birth in YYYY-MM-DD format.",
      },
      {
        name: "AddressElement1",
        type: "string",
        required: false,
        description: "First line of address (e.g., building name/number).",
      },
      {
        name: "AddressElement2",
        type: "string",
        required: false,
        description: "Second line of address (e.g., street name).",
      },
      {
        name: "AddressElement3",
        type: "string",
        required: false,
        description: "Third line of address (e.g., area/district).",
      },
      {
        name: "AddressElement4",
        type: "string",
        required: false,
        description: "Fourth line of address (e.g., city/emirate).",
      },
      {
        name: "Mobile",
        type: "string",
        required: false,
        description: "Mobile number with country code (e.g., +971xxxxxxxxx).",
      },
      {
        name: "Email",
        type: "string",
        required: false,
        description: "User's email address.",
      },
    ],
    requestExample: `{
  "CountryPrefix": "uae",
  "IDNumber": "784194000001118",
  "FirstName": "Ishaqjese",
  "MiddleName": "",
  "Surname": "Anuajumahe",
  "Dob": "1940-12-31",
  "AddressElement1": "The Meadows",
  "AddressElement2": " 5 Dubai",
  "AddressElement3": "Dubai",
  "AddressElement4": "",
  "Mobile": "505256924.0",
  "Email": "ishaqjese.anuajumahe@yahoo.com"
}`,
    responseExample: `{
  "Summary": {
    "NIKVerified": true,
    "IDVRecordVerified": true,
    "IDVVerifiedLevel": "N1",
    "IDVContactVerifiedLevel": "P2",
    "IDVMultiLevelVerification": false
  },
  "ReturnItems": {
    "Address": "The Meadows, 5 Dubai, Dubai"
  },
  "Scoring": {
    "SourceStatus": "Successful",
    "ErrorMessage": "",
    "NameMatchLevel": "Exact Match",
    "FullNameScore": 100,
    "FirstNameScore": 100,
    "MiddleNameScore": 100,
    "SurnameScore": 100,
    "AddressMatchLevel": "Full Match",
    "FullAddressScore": 100,
    "AddressElement1Score": 100,
    "AddressElement2Score": 100,
    "AddressElement3Score": 100,
    "AddressElement4Score": 100,
    "DOBMatch": true,
    "MobileMatch": true,
    "EmailMatch": true
  }
}`,
    errors: [
      {
        code: "400",
        message: "Bad Request",
        description: "The request was unacceptable, often due to missing a required parameter.",
      },
      {
        code: "404",
        message: "Not Found",
        description: "The specified ID number could not be found in the database.",
      },
    ],
  },
  {
    id: "verify-user-saudi",
    category: "verification",
    name: "Verify User (Saudi Arabia)",
    method: "POST",
    path: "/verify_user",
    description: "Verifies a user's identity against Saudi Arabia government databases.",
    parameters: [
      {
        name: "CountryPrefix",
        type: "string",
        required: true,
        description: "Must be 'saudi' for this endpoint.",
      },
      {
        name: "IDNumber",
        type: "string",
        required: false,
        description: "Saudi National ID (Iqama) number.",
      },
      {
        name: "FirstName",
        type: "string",
        required: true,
        description: "User's first name as it appears on their ID.",
      },
      {
        name: "MiddleName",
        type: "string",
        required: false,
        description: "User's middle name as it appears on their ID.",
      },
      {
        name: "Surname",
        type: "string",
        required: true,
        description: "User's surname/last name as it appears on their ID.",
      },
      {
        name: "Dob",
        type: "string",
        required: true,
        description: "Date of birth in YYYY-MM-DD format.",
      },
      {
        name: "AddressElement1",
        type: "string",
        required: false,
        description: "First line of address (e.g., building name/number).",
      },
      {
        name: "AddressElement2",
        type: "string",
        required: false,
        description: "Second line of address (e.g., street name).",
      },
      {
        name: "AddressElement3",
        type: "string",
        required: false,
        description: "Third line of address (e.g., area/district).",
      },
      {
        name: "AddressElement4",
        type: "string",
        required: false,
        description: "Fourth line of address (e.g., city/province).",
      },
      {
        name: "Mobile",
        type: "string",
        required: false,
        description: "Mobile number with country code (e.g., +966xxxxxxxxx).",
      },
      {
        name: "Email",
        type: "string",
        required: false,
        description: "User's email address.",
      },
    ],
    requestExample: `{
  "CountryPrefix": "saudi",
  "IDNumber": "1000000016",
  "FirstName": "عبدالرحمن",
  "MiddleName": "هزاع",
  "Surname": "الزمر",
  "Dob": "2005-02-15",
  "AddressElement1": "حي الملك سلمان المجمعة, منطقة الرياض",
  "AddressElement2": "المجمعة",
  "AddressElement3": "",
  "AddressElement4": "",
  "Mobile": "591811999",
  "Email": "as.alzomor@hotmail.com"
}`,
    responseExample: `{
  "Summary": {
    "NIKVerified": true,
    "IDVRecordVerified": true,
    "IDVVerifiedLevel": "N1",
    "IDVContactVerifiedLevel": "P2",
    "IDVMultiLevelVerification": false
  },
  "ReturnItems": {
    "Address": "حي الملك سلمان المجمعة, منطقة الرياض, المجمعة"
  },
  "Scoring": {
    "SourceStatus": "Successful",
    "ErrorMessage": "",
    "NameMatchLevel": "Exact Match",
    "FullNameScore": 100,
    "FirstNameScore": 100,
    "MiddleNameScore": 100,
    "SurnameScore": 100,
    "AddressMatchLevel": "Full Match",
    "FullAddressScore": 100,
    "AddressElement1Score": 100,
    "AddressElement2Score": 100,
    "AddressElement3Score": 100,
    "AddressElement4Score": 100,
    "DOBMatch": true,
    "MobileMatch": true,
    "EmailMatch": true
  }
}`,
    errors: [
      {
        code: "400",
        message: "Bad Request",
        description: "The request was unacceptable, often due to missing a required parameter.",
      },
      {
        code: "404",
        message: "Not Found",
        description: "The specified ID number could not be found in the database.",
      },
    ],
  },
]
