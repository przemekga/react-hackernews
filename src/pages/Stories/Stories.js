import React, { useState, useEffect, Fragment } from "react";
import { Pagination, Row, Col, Button } from "react-materialize";
import StoryList from "../../components/StoryList/StoryList";
import axios from "axios";

const Stories = ({ history, location, match }) => {
  const [storiesData, setStoriesData] = useState([]);
  const [page, setPage] = useState(0);
  const [noMorePages, setNoMorePages] = useState(false);

  const fetchStories = url => {
    axios.get(url).then(res => {
      if (!res.data.hits.length) {
        setNoMorePages(true);
      } else {
        setNoMorePages(false);
      }
      page > 0
        ? setStoriesData([...storiesData, ...res.data.hits])
        : setStoriesData(res.data.hits);
    });
  };

  const storyRoutes = () => {
    switch (match.params.id) {
      case "top":
        fetchStories(
          `https://hn.algolia.com/api/v1/search?query=&tags=story&page=${page}`
        );
        break;
      case "new":
        fetchStories(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
        );
        break;
      case "top-today":
        fetchStories(
          `https://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`
        );
        break;
      default:
        fetchStories(
          `https://hn.algolia.com/api/v1/search?query=&tags=story&page=${page}`
        );
        break;
    }
  };

  const loadMore = number => {
    setPage(number);
  };

  useEffect(() => {
    storyRoutes();
    history.listen(() => {
      setPage(0);
    })
  }, [match.params.id, page]);


  return (
    <Fragment>
      <StoryList storiesData={storiesData} />
      <Row>
        <Col s={12} className="center-align">
          {noMorePages ? <p>There is nothing more :(</p> : <Button onClick={() => loadMore(page + 1)}>Load more</Button>}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Stories;
