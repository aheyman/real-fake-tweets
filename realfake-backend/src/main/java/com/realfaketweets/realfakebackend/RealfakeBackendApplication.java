package com.realfaketweets.realfakebackend;

import com.realfaketweets.realfakebackend.model.Tweet;
import com.realfaketweets.realfakebackend.model.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RealfakeBackendApplication implements CommandLineRunner {


	@Autowired
	private TweetRepository repository;


	public static void main(String[] args) {
		SpringApplication.run(RealfakeBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {


		// fetch all tweets
		System.out.println("Tweets found with findAll():");
		System.out.println("-------------------------------");
		for (Tweet tweet: repository.findAll()) {
			System.out.println(tweet);
		}
		System.out.println();


	}


}
