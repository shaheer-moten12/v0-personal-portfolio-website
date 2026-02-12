import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage for demo (replace with database in production)
const contactSubmissions: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Rate limiting (simple implementation)
    const recentSubmissions = contactSubmissions.filter(
      (sub) =>
        sub.email === email &&
        new Date().getTime() - sub.timestamp < 3600000 // 1 hour
    )

    if (recentSubmissions.length >= 3) {
      return NextResponse.json(
        { error: 'Too many submissions from this email. Please try again later.' },
        { status: 429 }
      )
    }

    // Store submission
    contactSubmissions.push({
      name,
      email,
      subject,
      message,
      timestamp: new Date().getTime(),
    })

    // In production, you would:
    // 1. Send email via Resend, SendGrid, or similar
    // 2. Store in database
    // 3. Send confirmation email to user
    // 4. Notify admin of new submission

    console.log('[Contact Form] New submission:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Message received! I will get back to you soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
