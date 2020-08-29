import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ControlledCarousel } from "./../component/carousel";

export const Home = () => {
	return (
		<div className="content-wrapper">
			<div className="home-container d-flex justify-content-center">
				<ControlledCarousel />
			</div>

			{/* This is the banner section below the carousel */}
			<div className="home-banner">
				<div className="home-banner-header d-flex justify-content-center">
					{/* This is the banner heading */}
					<h1>How SuperGig Works For You</h1>
				</div>
				{/* This is the banner icons */}
				<div className="home-banner-icons d-flex justify-content-center">
					{/* Search for jobs */}
					<div className="banner-container">
						<i className="fas fa-search ico">
							<h3 className="icons-text">Search For Jobs</h3>
						</i>
						<p className="banner-description">
							Search short-term for jobs posted by members of your community.
						</p>
					</div>

					{/* Post jobs*/}
					<div className="banner-container">
						<i className="fas fa-paste ico">
							<h3 className="icons-text">Post Jobs</h3>
						</i>
						<p className="banner-description">Post short-term jobs you might need assitance with.</p>
					</div>

					{/* Earn money*/}
					<div className="banner-container">
						<i className="fas fa-hand-holding-usd ico">
							<h3 className="icons-text">Earn Money</h3>
						</i>
						<p className="banner-description">
							Earn money by completing jobs while helping your community.
						</p>
					</div>

					{/* Build relationships*/}
					<div className="banner-container">
						<i className="fas fa-comments ico">
							<h3 className="icons-text">Build Relationships</h3>
						</i>
						<p className="banner-description">
							Build relationships within your community that could lead to future jobs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
