import { initiate_user_conversation } from "../_utils/initiate";

export async function GET() {
    initiate_user_conversation();
    return Response.json({ message: 'Intiated user conversation successfully' })
}