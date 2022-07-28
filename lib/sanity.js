import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ek140gsh",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skwHq9TasOWrD5Om4yKSUy4GYGVV5yG8FodQWz9vt0HfpRYqG8vI55yhfhccqF32SVSpvXMdtFYwOIS91ndgcAbgdKCUdwHuH9tLKh1LtYF5fAvxAI1J5Z4h3r6sqRLM5HwOG09xTUD1RDOBbMBOQvL2jS7hysjx1LpoohVg9Ir9mupxLEPv",
  useCdn: false,
});
