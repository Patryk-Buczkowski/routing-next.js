import { MyLink } from "@/components/buttons/Link";

export default function F3() {
    return (
        <>
        <h1>f3 page</h1>
        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1" name="f1" />
        </div>
        </>
    )
}