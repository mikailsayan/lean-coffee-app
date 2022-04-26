import Link from "next/link";
import styled from "styled-components";

export default function Header() {

    return (
        <HeaderStyle>
            <Link href="/">Home</Link>
            <br />
            <Link href="/cards">Cards</Link>
            <br />
            <Link href="/create">Create</Link>
            <br />
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    background-color: green;
`