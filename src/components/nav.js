//create the function Nav and export
export default function Nav(){
    return(

        <nav>
            <div className="header--bar">
            <a href="https://editorial.rottentomatoes.com/guide/best-thanksgiving-movies/"  target="_blank" rel="noreferrer"><img className="logo" src="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2018/11/13150346/RT_ThanksgivingList_700X250.jpg" width="200" alt="Top 10 Thanksgiving Movies"/></a> 
            </div>
            <ul className="nav text-bg-secondary nav-justified">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.rottentomatoes.com/search?search=thanksgiving" target="_blank" rel="noreferrer">Thanksgiving Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://editorial.rottentomatoes.com/guide/best-thanksgiving-movies/"  target="_blank" rel="noreferrer">NEWS</a>
                </li>
            </ul>
        </nav>
    )
}