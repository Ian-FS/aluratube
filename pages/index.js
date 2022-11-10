import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

const StyledDiv = styled.div`
    
    .home {

        background-color: red;
    }
    
`;

function HomePage() {


    return (

        <>
            <CSSReset />
            <StyledDiv>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}>
                    <Menu/>
                    <Header />
                    <Timeline playLists={config.playlists} />
                </div>
            </StyledDiv>
        </>
    )
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

    }

`;

function Header() {
    return (
        <StyledHeader>

            {/*<img src="banner">*/}

            |<section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>



        </StyledHeader>
    )
}

function Timeline(props) {
    // console.log(props.playLists)
    // console.log(Object.keys(props.playLists))
    const playListNames = Object.keys(props.playLists)

    // console.log(playListNames)

    return (
        <StyledTimeline>
            <div>
                {
                    playListNames.map((playListName) => {
                        const videos = props.playLists[playListName]
                        console.log(videos)

                        return (
                            <section>
                                <h2>
                                    {playListName}
                                </h2>
                                <div>
                                    {videos.map((video) => {
                                        return(
                                            <a href={video.url}>
                                                <img src={video.thumb}/>
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </section>
                        )   
                        
                    })
                }    
            </div>
        </StyledTimeline>
    )
}