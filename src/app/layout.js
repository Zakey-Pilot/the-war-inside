import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { DataProvider } from "@/context/DataContext";
import { fromRecord } from "@/models/pageModel";
import { lato } from "@/styles/fonts/lato";

export const metadata = {
  title: "The War Inside",
  description: "Generated by create next app",
};

async function fetchWebsiteStrings() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      cache: 'no-store',
    }
  );

  const data = await res.json();
  return data.records.map((record) => record.fields);
}
const airtableData = await fetchWebsiteStrings();
const mappedData = fromRecord(airtableData[0]); // you can map many if needed


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        <Navbar />
        <DataProvider initialData={mappedData}>
          {children}
        </DataProvider>
      </body>

    </html>
  );
}
