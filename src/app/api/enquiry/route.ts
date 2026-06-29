import { NextResponse } from "next/server";
import type { EnquiryPayload } from "@/data/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // Stub: log enquiry for development. Wire to email/CRM in production.
    console.log("[AVN Enquiry]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received. Our concierge team will be in touch shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
