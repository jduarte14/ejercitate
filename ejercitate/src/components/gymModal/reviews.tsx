import { View, Text, Image } from 'react-native';
import styles from './../../styles';

const Reviews = ({ reviews }) => {
    return (
        <View style={styles.reviewContainer}>
            {
                reviews.map((review, index) => {
                    return <View style={styles.userReview} key={index}>
                        <Text style={styles.reviewDate}>
                            {review.date}
                        </Text>

                        <Text style={styles.reviewTitle}>
                            {review.author}
                        </Text>

                        {review.rating === 5 ? <View style={styles.starsContainer}>
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                        </View> : null}
                        {review.rating === 4 ? <View style={styles.starsContainer}>
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                        </View> : null}
                        {review.rating === 3 ? <View style={styles.starsContainer}>
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                        </View> : null}
                        {review.rating === 2 ? <View style={styles.starsContainer}>
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                        </View> : null}
                        {review.rating === 1 ? <View style={styles.starsContainer}>
                            <Image style={styles.star} source={require('./../../img/star.png')} />
                        </View> : null}
                        <Text style={styles.reviewText}>
                            {review.content}
                        </Text>
                    </View>
                })
            }
            </View>

       
    )

}


export default Reviews;

