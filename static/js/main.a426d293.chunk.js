(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{10:function(e,a,t){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__Owxbf",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__3EhCD"}},11:function(e,a,t){e.exports={overlay:"Modal_overlay__ZEjKl",modal:"Modal_modal__24PPD"}},12:function(e,a,t){e.exports={app:"App_app__2pTMB",loader:"App_loader__1zOS_"}},23:function(e,a,t){e.exports={imageGallery:"ImageGallery_imageGallery__14N3Q"}},24:function(e,a,t){e.exports={button:"LoadMoreBtn_button__3XmEz"}},71:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),o=t.n(r),c=t(22),l=t.n(c),s=t(13),i=t(4),u=t(5),m=t(7),h=t(6),d=t(8),p=t.n(d),b=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(t,[{key:"render",value:function(){return Object(n.jsx)("header",{className:p.a.searchbar,children:Object(n.jsxs)("form",{className:p.a.searchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:p.a.searchFormButton,children:Object(n.jsx)("span",{className:p.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:p.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),t}(r.Component),g=t(23),j=t.n(g);function f(e){var a=e.children;return Object(n.jsx)("ul",{className:j.a.imageGallery,children:a})}var y=t(10),_=t.n(y);function v(e){var a=e.tags,t=e.webformatURL,r=e.onClick;return Object(n.jsx)("li",{className:_.a.imageGalleryItem,onClick:r,children:Object(n.jsx)("img",{src:t,alt:a,className:_.a.imageGalleryItemImage})})}var O=t(24),x=t.n(O);function S(e){var a=e.nextPageRequest;return Object(n.jsx)("button",{type:"button",onClick:a,className:x.a.button,children:"Load More"})}var I=t(11),w=t.n(I),C=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleEscClose=function(a){"Escape"===a.code&&e.props.onClose()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscClose)}},{key:"render",value:function(){var e=this.props,a=e.largeImageURL,t=e.tags;return Object(n.jsx)("div",{className:w.a.overlay,children:Object(n.jsx)("div",{className:w.a.modal,children:Object(n.jsx)("img",{src:a,alt:t})})})}}]),t}(r.Component),k=t(25),F=t.n(k);function L(e,a){return F.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("18096168-1a47ddc4f6b43b68eb373a2c6","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))}var N=t(26),G=t.n(N),A=(t(70),t(12)),E=t.n(A),B=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={searchQuery:"",page:1,loading:!1,imgArray:[],largeImage:null},e.handleSearchFormSubmit=function(a){e.setState({searchQuery:a,page:1,imgArray:[]})},e.apiHandler=function(){var a=e.state,t=a.searchQuery,n=a.page;e.setState({loading:!0}),L(t,n).then((function(a){return e.setState((function(e){return{imgArray:[].concat(Object(s.a)(e.imgArray),Object(s.a)(a.hits)),page:e.page+1}}))})).finally((function(){e.setState({loading:!1})}))},e.modalHandler=function(a){e.setState({largeImage:a})},e.modalClose=function(){e.setState({largeImage:null})},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.apiHandler(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.state,t=a.imgArray,r=a.loading,o=a.largeImage;return Object(n.jsxs)("div",{className:E.a.app,children:[Object(n.jsx)(b,{onSubmit:this.handleSearchFormSubmit}),o&&Object(n.jsx)(C,{largeImageURL:o,tags:"tags",onClose:this.modalClose}),this.state.imgArray.length>0&&Object(n.jsx)(f,{children:t.map((function(a){return Object(n.jsx)(v,{tags:a.tags,webformatURL:a.webformatURL,onClick:function(){return e.modalHandler(a.largeImageURL)}},a.id)}))}),r&&Object(n.jsx)("div",{className:E.a.loader,children:Object(n.jsx)(G.a,{type:"ThreeDots",color:"#2a2fb0",height:100,width:100})}),t.length>0&&!r&&Object(n.jsx)(S,{nextPageRequest:this.apiHandler})]})}}]),t}(r.Component);l.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))},8:function(e,a,t){e.exports={searchbar:"Searchbar_searchbar__2xe9S",searchForm:"Searchbar_searchForm__3X0km",searchFormButton:"Searchbar_searchFormButton__whodL",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3nfye",searchFormInput:"Searchbar_searchFormInput__1HkIv"}}},[[71,1,2]]]);
//# sourceMappingURL=main.a426d293.chunk.js.map