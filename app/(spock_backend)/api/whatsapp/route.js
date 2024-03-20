const smsutils = require('./_utils/sender');

export async function GET() {
    return Response.json({ message: 'Front office tool is up and running' })
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    try {
        smsutils.send_message(data.message);
        return Response.json({
            success: true,
            message: 'Message sent successfully'
        })
    }
    catch (error) {
        return Response.json({
            success: false,
            message: 'Error sending message'
        })
    }
}
