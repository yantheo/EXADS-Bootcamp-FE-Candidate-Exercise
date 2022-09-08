$(document).ready(function() {
    //Questions
    const questions = [
            { question: 'Choose one of the three movies' },
            { question: 'Which one do you like the most?' },
            { question: 'Which one do you want to watch now?' }
        ]
        //Animation container question
    $('.total_question').text(questions.length)
    for (q = 0; q < questions.length; q++) {
        $('#question-markup').append('<div class="round_index"></div>')
        $('.round_index')[0].style.backgroundColor = '#22DAA8';
    }
    //Adding HTML questions
    let nextQuestion = $('#question')
    for (let i = 0; i < questions.length; i++) {
        nextQuestion = $('#question-animation');
        nextQuestion.append("<p class='question hidden'>" + questions[i].question + "</p>");
        displayQuestion = document.getElementsByClassName("question");
        displayQuestion[0].classList.remove('hidden')
    }
    //Suggestions movies
    const suggestions = [{
                id: 1,
                movie: 'the gray man',
                topic: 'action',
                img: 'grayman.png',
                url: 'https://www.imdb.com/title/tt1649418/?ref_=fn_al_tt_1'
            },
            {
                id: 2,
                movie: 'blonde',
                topic: 'drama',
                img: 'blonde.png',
                url: 'https://www.imdb.com/title/tt1655389/?ref_=fn_al_tt_1'
            },
            {
                id: 3,
                movie: 'minions',
                topic: 'comedy',
                img: 'minions.png',
                url: 'https://www.imdb.com/title/tt5113044/?ref_=nv_sr_srsg_0'
            },
            {
                id: 4,
                movie: 'Top Gun',
                topic: 'action',
                img: 'topgun.png',
                url: 'https://www.imdb.com/title/tt1745960/?ref_=fn_al_tt_1'
            },
            {
                id: 5,
                movie: 'Thor',
                topic: 'action',
                img: 'thor.png',
                url: 'https://www.imdb.com/title/tt10648342/?ref_=nv_sr_srsg_0'
            },
            {
                id: 6,
                movie: 'Bullet train',
                topic: 'action',
                img: 'bullettrain.png',
                url: 'https://www.imdb.com/title/tt12593682/?ref_=nv_sr_srsg_0'
            },
            {
                id: 7,
                movie: 'Purple hearts',
                topic: 'drama',
                img: 'purple_hearts.png',
                url: 'https://www.imdb.com/title/tt4614584/?ref_=nv_sr_srsg_0'
            },
            {
                id: 8,
                movie: 'black panther',
                topic: 'drama',
                img: 'Black_Panther.png',
                url: 'https://www.imdb.com/title/tt1825683/?ref_=nv_sr_srsg_0'
            },
            {
                id: 9,
                movie: 'life',
                topic: 'drama',
                img: 'life.png',
                url: 'https://www.imdb.com/title/tt5442430/?ref_=nv_sr_srsg_0'
            },
            {
                id: 10,
                movie: 'Do Little',
                topic: 'comedy',
                img: 'dolittle.png',
                url: 'https://www.imdb.com/title/tt6673612/?ref_=nv_sr_srsg_0'
            },
            {
                id: 11,
                movie: 'Us',
                topic: 'comedy',
                img: 'us.png',
                url: 'https://www.imdb.com/title/tt6857112/?ref_=nv_sr_srsg_0'
            },
            {
                id: 12,
                movie: 'Skyscraper',
                topic: 'comedy',
                img: 'skyscraper.png',
                url: 'https://www.imdb.com/title/tt6682754/?ref_=nv_sr_srsg_3'
            },
            {
                id: 13,
                movie: 'Jean Claude VD',
                topic: 'action',
                img: 'jean_claude_van_johnson.png',
                url: 'https://www.imdb.com/title/tt6682754/?ref_=nv_sr_srsg_3'
            },
            {
                id: 14,
                movie: 'knives_out',
                topic: 'comedy',
                img: 'knives_out.png',
                url: 'https://www.imdb.com/title/tt8946378/?ref_=nv_sr_srsg_1'
            },
            {
                id: 15,
                movie: 'the nutracker',
                topic: 'action',
                img: 'the_nutracker.png',
                url: 'https://www.imdb.com/title/tt5523010/?ref_=nv_sr_srsg_3'
            },
            {
                id: 16,
                movie: 'Tintin',
                topic: 'drama',
                img: 'tintin.png',
                url: 'https://www.imdb.com/title/tt0983193/?ref_=nv_sr_srsg_0'
            },
            {
                id: 17,
                movie: 'Batman',
                topic: 'drama',
                img: 'batman.png',
                url: 'https://www.imdb.com/title/tt1877830/?ref_=fn_al_tt_1'
            },
            {
                id: 18,
                movie: 'Black Widow',
                topic: 'drama',
                img: 'black_widow.png',
                url: 'https://www.imdb.com/title/tt3480822/?ref_=fn_al_tt_1'
            },
            {
                id: 19,
                movie: 'Matrix',
                topic: 'action',
                img: 'matrix.png',
                url: 'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0'
            },
            {
                id: 20,
                movie: 'Jaga Jaga',
                topic: 'comedy',
                img: 'jaga_jaga.png',
                url: 'https://www.imdb.com/title/tt19655954/?ref_=fn_al_tt_1'
            },
            {
                id: 21,
                movie: 'Titan',
                topic: 'comedy',
                img: 'the_titan.png',
                url: 'https://www.imdb.com/title/tt4986098/?ref_=fn_al_tt_1'
            },
        ]
        //Adding movies suggestions in html
    $('.movie').append("<img class='movie_poster'>")
    $('.movie_poster').each(function(s) {
        $('.movie_poster').push($(this).attr({ src: "img/" + suggestions[s].img, alt: suggestions[s].movie, topic: suggestions[s].topic, id: suggestions[s].id }))
    })
    let moviesSuggestion = $('.movie_poster')
    let index = 0
    let questionPosition = 1
        //Onclick movies suggestions
    $('.movie_poster').click(function() {
        index++
        if (index < questions.length) {
            //Animation container question
            $('.index_question').text(questionPosition + index)
            $('.round_index')[index - 1].style.backgroundColor = ''
            $('.round_index')[index].style.backgroundColor = '#22DAA8'
                //Animation questions
            let currentQuestion = $('.question')[index - 1]
            let nextQuestion = $('.question')[index]

            currentQuestion.classList.add('fade-out')
            if (currentQuestion.classList.contains('fade-in')) {
                currentQuestion.classList.remove('fade-in')
            }
            nextQuestion.classList.add('fade-in')
            nextQuestion.classList.remove('hidden')

            //Animation movies suggestions
            let dataMovie = new Array
            for (i = 0; i < suggestions.length; i++) {
                if ($(this).attr('topic') == suggestions[i].topic && $(this).attr('id') != suggestions[i].id) {
                    dataMovie.push({ "movie": suggestions[i].movie, "img": suggestions[i].img, "topic": suggestions[i].topic, "id": suggestions[i].id })
                }
            }
            moviesSuggestion.fadeOut(400)
            setTimeout(function() {
                //Animation movies suggestions
                moviesSuggestion.each(function(s) {
                    moviesSuggestion.push($(this).attr({ src: "img/" + dataMovie[s].img, alt: dataMovie[s].movie, topic: dataMovie[s].topic, id: dataMovie[s].id }))
                }).fadeIn(400)
            }, 400)
        }
        //CALL TO ACTION
        else {
            //Insert CTO content
            let call_to_action_intro = '<div class="cto_title">Watch new movies for free</div>';
            let call_to_action_text1 = "<p>Watch any movies online for free without ads!</p>";
            let call_to_action_text2 = '<p>Have fun watching your favourite movies!</p>';
            let button = "<a href='' class='url_movie_suggested'>WATCH HERE!</a>"
            let call_to_action = call_to_action_intro + call_to_action_text1 + call_to_action_text2
            $('#question-animation').after('<div class="call_to_action">' + call_to_action + button + "</div>");
            //Animation fade
            $('#container-question').fadeOut(300);
            $('#question-animation').fadeOut(300);
            $('#movie-answer').fadeOut(300);
            setTimeout(function() {
                $('.call_to_action').addClass('fade-in')
            }, 500);
            //ID movie suggested
            let id_movie = $(this).attr('id');
            for (i = 0; i < suggestions.length; i++) {
                if (id_movie == suggestions[i].id) {
                    var urlCallToAction = suggestions[i].url
                }
            }
            $(".url_movie_suggested").attr("href", urlCallToAction)
        }
    })
});