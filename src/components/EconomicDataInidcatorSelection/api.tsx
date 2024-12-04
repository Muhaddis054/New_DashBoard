// Define the structure of the API response
export interface EconomicData {
  Years: string; // Assuming the response contains a "Years" key for labels
  [key: string]: string | number | null; // Other keys are indicators with values being numbers, strings, or null
}

// Custom error type for API errors
export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
}
export interface ApiResponse {
  data: EconomicData[];
}

// Define the request body type
interface RequestBody {
  year?: string; // Optional year field
  indicator?: string; // Optional indicator field
}

// Fetch economic data from the API
export const fetchEconomicData = async (
  year: string,
  indicator: string
): Promise<EconomicData[]> => {
  // Prepare request body with specific types
  const requestBody: RequestBody = {};

  if (indicator !== "All") {
    requestBody.indicator = indicator;
  }

  if (year !== "All") {
    requestBody.year = year;
  }

  const response = await fetch(
    "https://nrpuapi-137b31326fcb.herokuapp.com/api/economic-data/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!response.ok) {
    const errorText = await response.text(); // Get the error message from the response
    throw new APIError(`Failed to fetch data: ${response.status} ${errorText}`);
  }

  // Parse and return the JSON response as an array of EconomicData objects
  return (await response.json()) as EconomicData[];
};
