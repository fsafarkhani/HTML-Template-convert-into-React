import React, { Component } from 'react'

export default class NewsDetail extends Component {
  render() {
    return (
      <div>
        <section id="single-news-p1" className="single-news-p1">
  <div className="container">
    <div className="row">
      {/* left news details */}
      <div className="col-md-8">
        <div className="single-news-p1-cont">
          <div className="single-news-img">
            <img src="img/news/news-box.jpg" alt className="img-fluid" />
          </div>
          <div className="single-news-desc">
            <h3>Reduction of AC energy wastage through clamp meter</h3>
            <ul className="list-inline">
              <li>Posted: <span className="text-theme-colored2"> 9/9/2018</span></li>
              <li>By: <span className="text-theme-colored2">Admin</span></li>
              <li><i className="fa fa-comments-o" /> 1 comments</li>
            </ul>
            <hr />
            <div className="bg-light-gray">
              <p>Clamp meter connected to an AC monitors the current flow and indicates usage (range) through green, orange and red colour codes. The four friends had learnt about capacitor and its use in many electronic appliances in their physics class. Ageing of these, leads to lesser efficiency of the appliance. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>  
              <blockquote className="blockquote">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.  consectetur adipiscing elit. Integer posuere erat a ante</p>
                <footer className="blockquote-footer">Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="comments-container"> 
              <ul id="comments-list" className="comments-list">
                <li>
                  <div className="comment-main-level">
                    {/* Avatar */}
                    <div className="comment-avatar"><img src="img/client/avatar-2.jpg" alt /></div>
                    {/* Contenedor del Comentario */}
                    <div className="comment-box">
                      <div className="comment-head">
                        <h6 className="comment-name by-author"><a href="#">John Boss</a></h6>
                        <span>before 20 minutes</span>
                        <i className="fa fa-reply" />
                        <i className="fa fa-heart" />
                      </div>
                      <div className="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                      </div>
                    </div>
                  </div>
                  {/* Respuestas de los comentarios */}
                  <ul className="comments-list reply-list">
                    <li>
                      {/* Avatar */}
                      <div className="comment-avatar"><img src="img/client/avatar-6.jpg" alt /></div>
                      {/* Contenedor del Comentario */}
                      <div className="comment-box sub-comment-box">
                        <div className="comment-head">
                          <h6 className="comment-name"><a href="#">Tresa Ben</a></h6>
                          <span>hace 10 minutos</span>
                          <i className="fa fa-reply" />
                          <i className="fa fa-heart" />
                        </div>
                        <div className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                        </div>
                      </div>
                    </li>
                    <li>
                      {/* Avatar */}
                      <div className="comment-avatar"><img src="img/client/avatar-2.jpg" alt /></div>
                      {/* Contenedor del Comentario */}
                      <div className="comment-box sub-comment-box">
                        <div className="comment-head">
                          <h6 className="comment-name by-author"><a href="#">John Boss</a></h6>
                          <span>before 10 minutes</span>
                          <i className="fa fa-reply" />
                          <i className="fa fa-heart" />
                        </div>
                        <div className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comment-main-level">
                    {/* Avatar */}
                    <div className="comment-avatar"><img src="img/client/avatar-1.jpg" alt /></div>
                    {/* Contenedor del Comentario */}
                    <div className="comment-box">
                      <div className="comment-head">
                        <h6 className="comment-name"><a href="#">Blensan Trul</a></h6>
                        <span>before 10 minutes</span>
                        <i className="fa fa-reply" />
                        <i className="fa fa-heart" />
                      </div>
                      <div className="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="comment-box-sn">
              <h5>Leave a Reply</h5>
              <textarea name id placeholder="Comment" defaultValue={""} />
              <input type="text" name="email" placeholder="Email Id" className="form-control" /><br />
              <input type="text" name="text" placeholder="Name" className="form-control" /><br />
              <button className="btn btn-general btn-green" style={{width: '100%'}} role="button">Send</button>
            </div>
          </div>
        </div>  
        <hr />
      </div>
      {/* Right news details */}
      <div className="col-md-4">
        <div className="small-news-box">
          <a href>
            <div className="right-side-sn-cont">
              <img src="img/news/news-6.jpg" alt className="img-fluid" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <small><fa className="fa-watch"> Jan 1, 2019</fa></small>
            </div>
          </a>
          <a href>
            <div className="right-side-sn-cont">
              <img src="img/news/news-9.jpg" alt className="img-fluid" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <small><fa className="fa-watch"> Jan 1, 2019</fa></small>
            </div>
          </a>
          <a href>
            <div className="right-side-sn-cont">
              <img src="img/news/news-7.jpg" alt className="img-fluid" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <small><fa className="fa-watch"> Jan 1, 2019</fa></small>
            </div>
          </a>
          <a href>
            <div className="right-side-sn-cont">
              <img src="img/news/news-3.jpg" alt className="img-fluid" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <small><fa className="fa-watch"> Jan 1, 2019</fa></small>
            </div>
          </a>
        </div>
        <div className="ad-box-sn"> 
          <h3 className="pb-2">Current News</h3>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/news-8.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>Reduction of AC energy</h3>
              <p className="desc">Clamp meter connected to an AC monitors the current flow and indicates usage (range) through green, orange and red colour codes.</p>
              <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/news-9.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>Hilly terrain cart</h3>
              <p className="desc">Three equidistant wheels on a single axle attached to two similar sets in different planes, allowing flexibility in movement with respect to each other. </p>
              <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/news-11.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>Indicator for dead landline phones</h3>
              <p className="desc">Contrary to popular </p>
              <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</section>

      </div>
    )
  }
}
