import { useEffect, useState } from 'react';
import Carousel2Card from '../Carousel2Card'


function Carousel2Card() {

    const [activeId, setActiveId] = useState("Carousel1");
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:517/api/carousel/${activeId}`);
                setContent(response.data.body);
            } catch (error) {
                console.error("Error fetching conetnt", error);
                setContent("Error loading content. Please try again.");
            }
        };
    fetchData();
}, [activeId]);

    const tabMenu = [
        { id: "personalized", label: "Personalized"},
        { id: "moderated", label: "Moderated"},
        { id: "managed", label: "Managed"},
    ]

    return (
        <div className='Carousel2Card'>
            <h2 className="Carousel2Card__title">Choose your preferred level of portfolio participation</h2>
            
        </div>
    );
}

export default Carousel2Card;