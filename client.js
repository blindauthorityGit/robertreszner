// client.js
import sanityClient, { getAsset } from "@sanity/client";

export default sanityClient({
    projectId: "igl1h9z3", // you can find this in sanity.json
    dataset: "production", // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: "2023-01-25",
});
export { getAsset };
