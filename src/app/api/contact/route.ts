import { NextResponse } from "next/server";
import type { ContactFormValues } from "@/store/useClinicStore";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormValues;

    if (!body.name?.trim()) {
      return NextResponse.json({ message: "Name is required." }, { status: 400 });
    }

    if (!body.email?.trim() || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!body.phone?.trim()) {
      return NextResponse.json({ message: "Phone is required." }, { status: 400 });
    }

    if (!body.service?.trim()) {
      return NextResponse.json(
        { message: "Service is required." },
        { status: 400 }
      );
    }

    if (!body.message?.trim() || body.message.trim().length < 10) {
      return NextResponse.json(
        { message: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    /**
     * This is a working API endpoint.
     *
     * For production, replace this console log with:
     * - Resend
     * - SendGrid
     * - Nodemailer
     * - Supabase insert
     * - Google Sheets webhook
     * - CRM integration
     */
    console.log("New dental clinic inquiry:", {
      ...body,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Inquiry received successfully.",
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}