const React = require("react");
const Banner = require("./Banner.jsx");
const JournalList = require("./JournalList.jsx");
const ArticleList = require("./ArticleList.jsx");
const NewsList = require("./NewsList.jsx");

const MainView = () => {

    return <>
        <Banner/>
        <JournalList/>
        <NewsList/>
        <ArticleList/>
    </>
}

module.exports = MainView;