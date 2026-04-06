// Server identity
export const SERVER_NAME = "minimal-mcp-web-search";
export const SERVER_VERSION = "1.0.0";

// HTTP
export const USER_AGENT = "MinimalMCP/1.0";
export const FETCH_TIMEOUT_MS = 10_000;

// Search
export const DUCKDUCKGO_SEARCH_URL = "https://html.duckduckgo.com/html/";
export const SEARCH_RESULTS_LIMIT = 5;

// Content
export const MAX_CONTENT_LENGTH = 10_000;

// Tool definitions
export const TOOLS = [
  {
    name: "web_search",
    description:
      "Search the web using DuckDuckGo. Returns a list of result titles, URLs, and snippets. Use this when you need current information.",
    inputSchema: {
      type: "object" as const,
      properties: {
        query: {
          type: "string",
          description: "Search query",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "fetch_page",
    description:
      "Fetch the text content of a web page. Returns plain text with HTML stripped. Use this to read the full content of a URL from search results.",
    inputSchema: {
      type: "object" as const,
      properties: {
        url: {
          type: "string",
          description: "URL to fetch",
        },
      },
      required: ["url"],
    },
  },
];
