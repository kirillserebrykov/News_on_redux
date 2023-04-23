import { connect } from 'react-redux';
import NewsList from './NewsList';
import { loadNews } from '../DLL';

const NewsListContainer = (props) => {
    return <NewsList {...props}/>
};

const mapStateToProps = state => ({
  articles: state.news.articles,
  loading: state.news.loading,
  error: state.news.error,
});

const mapDispatchToProps = {
  loadNews,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);