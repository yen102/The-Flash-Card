import Category from "./Category";

const Categories = (props) => {
        return ( <
                div > {
                    props.categories.map((category, index) => < Category key = { index }
                        name = { category.name }
                        listDecks = { category.Decks }
                        innerRef = { category.innerRef }
                        />)} <
                        /div>
                    );
                }

                export default Categories;