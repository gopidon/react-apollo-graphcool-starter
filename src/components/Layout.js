/**
 * Created by gopi on 1/8/17.
 */
import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {
    render () {
					return (
						<div className="app-container">
								<header>
									<nav className="navbar navbar-default">
											<div className="container-fluid">
													<div className="navbar-header">
															<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
																<span className="sr-only">Toggle navigation</span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
															</button>
															<a className="navbar-brand" href="/">Company Brand</a>
													</div>
													<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
															<ul className="nav navbar-nav">
																	<li>
																		<Link to={`/addPost`}>
																			Add Post
																		</Link>
																	</li>
															</ul>
													</div>
											</div>
									</nav>
							</header>
							<div className="app-content">{this.props.children}</div>
								<footer>
										<p>
											Footer goes here!
										</p>
								</footer>
						</div>
					);
    }



}




