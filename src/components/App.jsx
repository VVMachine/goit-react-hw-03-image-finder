import React, { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Modal from "./Modal/Modal";

import apiRequest from "../services/pixibayApi";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import styles from "../components/App.module.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    loading: false,
    imgArray: [],
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.apiHandler();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, imgArray: [] });
  };

  apiHandler = () => {
    const { searchQuery, page } = this.state;

    this.setState({
      loading: true,
    });

    apiRequest(searchQuery, page)
      .then((data) =>
        this.setState((prevState) => ({
          imgArray: [...prevState.imgArray, ...data.hits],
          page: prevState.page + 1,
        }))
      )
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  modalHandler = (lrgImgUrl) => {
    this.setState({
      largeImage: lrgImgUrl,
    });
  };

  modalClose = () => {
    this.setState({
      largeImage: null,
    });
  };

  render() {
    const { imgArray, loading, largeImage } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {largeImage && (
          <Modal
            largeImageURL={largeImage}
            tags={"tags"}
            onClose={this.modalClose}
          />
        )}

        {this.state.imgArray.length > 0 && (
          <ImageGallery>
            {imgArray.map((img) => (
              <ImageGalleryItem
                key={img.id}
                tags={img.tags}
                webformatURL={img.webformatURL}
                onClick={() => this.modalHandler(img.largeImageURL)}
              />
            ))}
          </ImageGallery>
        )}

        {loading && (
          <div className={styles.loader}>
            <Loader type="ThreeDots" color="#2a2fb0" height={100} width={100} />
          </div>
        )}

        {imgArray.length > 0 && !loading && (
          <LoadMoreBtn nextPageRequest={this.apiHandler} />
        )}
      </div>
    );
  }
}
