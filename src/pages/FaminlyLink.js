import { useEffect, useState } from "react"
import styled from "styled-components";

const FLINK = [
    { id: 0, name: "Family Link", link: "" },
    { id: 1, name: "노량진캠퍼스", link: "#!" },
    { id: 2, name: "해커스경찰간부학원", link: "#!" },
    { id: 3, name: "대구캠퍼스", link: "#!" },
];

const Select = styled.select`
background: #444;
color:#fff;
padding: 0 15px;
`

const FamilyLink = () => {
    const [flnk, setflnk] = useState();

    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk])

    return (
        <Select onChange={(e) => setflnk(e.target.value)}>
            {
                FLINK.map(link => <option value={link.link} key={link.id}>{link.name}</option>)
            }
        </Select>
    )
}

export default FamilyLink;