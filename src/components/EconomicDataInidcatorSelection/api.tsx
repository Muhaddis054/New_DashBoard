export interface EconomicData {
    [key: string]: any; // Adjust this according to your API's response structure
  }
  
  // Custom error type for API errors
  export class APIError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "APIError";
    }
  }
  
  // Fetch economic data from the API
  export const fetchEconomicData = async (
    year: string,
    indicator: string
  ): Promise<EconomicData> => {
    if (!year || !indicator) {
      throw new APIError("Year and indicator are required.");
    }
  
    const response = await fetch("https://nrpuapi-137b31326fcb.herokuapp.com/api/economic-data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  indicator }),
    });
  
    if (!response.ok) {
      throw new APIError(`Failed to fetch data: ${response.statusText}`);
    }
  
    return await response.json();
  };
  