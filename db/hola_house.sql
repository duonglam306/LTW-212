drop schema hola_house;

create schema hola_house;

use hola_house;

-- phpMyAdmin SQL Dump
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2022 at 08:58 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `hola_house`
--
-- --------------------------------------------------------
--
-- Table structure for table `about_page`
--
CREATE TABLE `about_page` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `about_page`
--
INSERT INTO
  `about_page` (
    `id`,
    `title`,
    `description`,
    `content`,
    `image`,
    `date`
  )
VALUES
  (
    4,
    'About page 1',
    'Our story',
    '<b>What do we do </b>\r\n<br></br>\r\nWe work with solid wood, local and imports items to bring the Vietnamese market a European and Scandinavian style adapted for apartment and houses of all sizes. We sell all kind of products from medium to high standards such as living, dining, office, storage, lamp, carpet, and indoor decorations. We also work with a variety of brands such as: Baobab collection, opinel, sketch and dragon foosball.\r\n<br></br>\r\n<b>What can we bring to you </b>\r\n<br></br>\r\nWe are not intending to satisfy all, because that is impossible. But, rather, only those who are most demanding. We are destined to address the needs of the sophisticated buyer, who is willing to pay more for quality.\r\n<br></br>\r\nIn our particular market, we also seek the buyer who appreciates three attributes: the finest of furniture workmanship, the authenticity of the creators, and the brilliance of design, with an understanding of comfort and congruency built in.',
    'img/about_image_7.png',
    '2022-06-07 13:30:52'
  );

-- --------------------------------------------------------
--
-- Table structure for table `belong`
--
CREATE TABLE `belong` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `belong`
--
INSERT INTO
  `belong` (`cart_id`, `product_id`, `quantity`)
VALUES
  (55, 1, 1),
  (56, 2, 1),
  (57, 2, 2),
  (58, 1, 1),
  (60, 9, 1),
  (60, 8, 1);

-- --------------------------------------------------------
--
-- Table structure for table `carousel`
--
CREATE TABLE `carousel` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `title2` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `carousel`
--
INSERT INTO
  `carousel` (
    `id`,
    `title`,
    `title2`,
    `content`,
    `image`,
    `date`
  )
VALUES
  (
    1,
    'HOLA HOUSE TABLE',
    'SIMPLE TABLE TRENDS',
    'Be creative and incorporate furniture table verbs into your tagline to have more of an impact.',
    'img/homepage1.png',
    '2022-06-12 12:49:07'
  ),
  (
    2,
    'HOLA HOUSE CHAIR',
    'MODERN CHAIR TRENDS',
    'The most comfortable chairs are here to please you.',
    'img/homepage2.png',
    '2022-06-12 12:49:38'
  ),
  (
    3,
    'HOLA HOUSE BED',
    'NORTH VUNGLE BED TRENDS',
    'The bed you deserve at a price you can afford.',
    'img/homepage3.png',
    '2022-06-12 12:50:52'
  ),
  (
    4,
    'HOLA HOUSE LAMP',
    'VINTAGE LAMP TRENDS',
    'Choose eco-friendly systems of lighting.',
    'img/homepage4.png',
    '2022-06-12 12:51:04'
  );

-- --------------------------------------------------------
--
-- Table structure for table `cart`
--
CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `address_cur` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT 'Paid',
  `date` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_vietnamese_ci;

--
-- Dumping data for table `cart`
--
INSERT INTO
  `cart` (
    `id_cart`,
    `user_id`,
    `amount`,
    `address_cur`,
    `status`,
    `date`
  )
VALUES
  (
    55,
    22,
    9050000,
    'Ho Chi Minh, Viet Nam',
    'Paid',
    'Sat Jun 11 2022 12:32:14 GMT+0700 (Indochina Time)'
  ),
  (
    56,
    22,
    7050000,
    'Ho Chi Minh, Viet Nam',
    'Paid',
    'Sat Jun 11 2022 12:33:22 GMT+0700 (Indochina Time)'
  ),
  (
    57,
    22,
    7050000,
    'Ho Chi Minh, Viet Nam',
    'Paid',
    'Sat Jun 11 2022 12:35:06 GMT+0700 (Indochina Time)'
  ),
  (
    58,
    22,
    9050000,
    'Ho Chi Minh, Viet Nam',
    'Paid',
    'Sat Jun 11 2022 20:11:46 GMT+0700 (Indochina Time)'
  ),
  (
    60,
    29,
    38880000,
    'hello',
    'Paid',
    'Tue Jun 14 2022 00:46:01 GMT+0700 (Indochina Time)'
  );

-- --------------------------------------------------------
--
-- Table structure for table `category`
--
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--
INSERT INTO
  `category` (`id`, `name`, `type`, `amount`)
VALUES
  (1, 'side table', 'table', 34),
  (2, 'dinner table', 'table', 40),
  (3, 'makeup table', 'table', 40),
  (4, 'desk', 'table', 40),
  (5, 'bed 1m2', 'bed', 10),
  (6, 'bed 1m6', 'bed', 40),
  (7, 'bed 1m8', 'bed', 40),
  (8, 'armchair', 'chair', 40),
  (9, 'dining chairs', 'chair', 40),
  (10, 'benches', 'chair', 40),
  (11, 'work chair', 'chair', 40),
  (12, 'standing lamp', 'lamp', 40),
  (13, 'table lamp', 'lamp', 40),
  (14, 'ceiling lamp', 'lamp', 40),
  (15, 'floor lamp', 'lamp', 40);

-- --------------------------------------------------------
--
-- Table structure for table `comment_post`
--
CREATE TABLE `comment_post` (
  `id` int(11) NOT NULL,
  `id_post` int(6) UNSIGNED NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unread'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_post`
--
INSERT INTO
  `comment_post` (
    `id`,
    `id_post`,
    `username`,
    `content`,
    `date`,
    `status`
  )
VALUES
  (
    1,
    22,
    'lamduong123',
    'useful news',
    '2022-06-12 16:26:55',
    'read'
  ),
  (
    2,
    22,
    'lamduong123',
    'Hello',
    '2022-06-13 13:55:08',
    'unread'
  ),
  (
    3,
    43,
    'lamduong123',
    'Hehe',
    '2022-06-13 13:56:24',
    'unread'
  ),
  (
    4,
    43,
    'lamduong123',
    'Hohoo',
    '2022-06-13 13:56:31',
    'unread'
  ),
  (
    5,
    43,
    'lamduong123',
    'Em nop bai day',
    '2022-06-13 13:56:39',
    'unread'
  ),
  (
    6,
    43,
    'lamduong123',
    'Best News',
    '2022-06-13 13:56:46',
    'unread'
  ),
  (
    7,
    43,
    'lamduong123',
    'Nhuc cai nach',
    '2022-06-13 13:57:04',
    'unread'
  ),
  (
    8,
    43,
    'lamduong123',
    'Kien nach tham',
    '2022-06-13 13:57:52',
    'unread'
  ),
  (
    9,
    24,
    'dang.416',
    'Informative! Thank you',
    '2022-06-13 17:45:30',
    'unread'
  );

-- --------------------------------------------------------
--
-- Table structure for table `contact_page`
--
CREATE TABLE `contact_page` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `website` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `type` int(1) NOT NULL DEFAULT 0,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `contact_page`
--
INSERT INTO
  `contact_page` (
    `id`,
    `email`,
    `address`,
    `phone`,
    `website`,
    `image`,
    `type`,
    `create_date`
  )
VALUES
  (
    1,
    'bk.furniture.hcmut@gmail.com',
    '268 Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh City, Vietnam',
    '0942826536',
    'holahouse.com',
    'img/contact.png',
    1,
    '2022-06-11 12:33:46'
  );

-- --------------------------------------------------------
--
-- Table structure for table `feedback`
--
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` varchar(300) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `feedback`
--
INSERT INTO
  `feedback` (
    `id`,
    `email`,
    `name`,
    `subject`,
    `message`,
    `create_date`
  )
VALUES
  (
    4,
    'lamduong11201@gmail.com',
    'Lâm Thành Dương',
    'Sofa',
    'Best sofa',
    '2022-06-12 12:56:29'
  ),
  (
    5,
    'dangnguyen8877@gmail.com',
    'Nguyễn Trường Hải Đăng',
    'Complain',
    'The products are too good that made me buy so many.',
    '2022-06-13 17:45:04'
  );

-- --------------------------------------------------------
--
-- Table structure for table `post`
--
CREATE TABLE `post` (
  `id` int(6) UNSIGNED NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--
INSERT INTO
  `post` (
    `id`,
    `slug`,
    `title`,
    `author`,
    `content`,
    `image`,
    `summary`,
    `category`,
    `date`
  )
VALUES
  (
    22,
    'why-this-celebrity-designer-hopped-into-bed-with-this-mattress-brand',
    'Why this celebrity designer hopped into bed with this mattress brand',
    'Sheila Long O’Mara',
    'DORAVILLE, Ga. – Celebrity interior designer, author and television personality Nate Berkus is adding sleep products to his portfolio mix with a new partnership with Beautyrest that includes a mattress, mattress protector and pillows set to debut today.\r\n\r\nWhile this marks Berkus’ first foray into the sleep category, he has a number of partnerships in home including a collection with his husband Jeremiah Brent with Rancho Cucamonga, Calif.-based Living Spaces, a textile collection with Kravet, window treatments with The Shade Store, and he recently announced a collection of bed, bath and organization products with mDesign Home Décor  that will be introduced in 2023.\r\n\r\nA perennial favorite on Elle Décor’s A-List of designers, Berkus was named to the AD100 list in 2018.\r\n\r\n“I’ve been spending a lot of time studying sleep,” Berkus said. “It’s not a category that I’ve worked in before. I’m a design guy, an author, a husband and a father to two kids under 10. I can’t function with anything less than eight hours of sleep. This is very timely, and Beautyrest is a well-known, respected leader in the sleep and sleep technology business.”\r\n\r\nBerkus said he it was fun to work in a category that he’d not been involved in before. “I spent 26 years in pursuit of quality in every part of the home,” he said. “The idea that I had the opportunity to design products and impact, what I think is arguably one of the most important parts of a home, I jumped on the it and went all in.”\r\n\r\nThe Beautyrest by Nate Berkus collection includes a mattress offered in plush and extra firm, down pillows and a mattress protector. The mattress cover, made with Seaqual fabric made from plastic bottles recovered from oceans, is a signature design of Berkus’ with a subtle nod to herringbone styling. The mattress is made with zoned pocketed coil technology, cooling properties, memory foam and antimicrobial protection.\r\n\r\nMattresses are priced to retail at $2,199 in queen, while the down and feather pillow is priced to retail at $239 in queen. The mattress protectors retail from $209 in twin to $289 in king.\r\n\r\n“As a busy designer and parent, Nate shares our company’s mission to help people sleep better so they can live healthier lives,” said Taylor Beckstead, vice president of Beautyrest, Serta Simmons Bedding. “We are excited to bring his design aesthetic to Beautyrest as our latest in a series of design-led launches and collaborations from the Serta Simmons Bedding portfolio of brands.”\r\n',
    'img/news_why-this-celebrity-designer-hopped-into-bed-with-this-mattress-brand.jpg',
    'Why this celebrity designer hopped into bed with this mattress brand',
    'bed',
    '2022-06-11 13:58:15'
  ),
  (
    23,
    'why-bedding-experts-advise-selling-sleep-not-specs',
    'Why bedding experts advise selling sleep not specs',
    'Bill McLoughlin',
    'ORLANDO, Fla. — Talking coil counts and foam density might make someone a bedding expert, but it’s not likely to close a mattress sale, according to experts on Furniture Today’s Bedding Conference panel, Health, Wellness and Selling Sleep.\r\n\r\nThose who are going to be most successful are instead those who can help consumers understand the role that sleep plays in a healthy lifestyle and then connect them to the mattress that will deliver best on that need.\r\n\r\nTo do that means overcoming a host of traditional selling behaviors. “We teach RSAs about ‘spec and tech,’ and then we’re surprised when they don’t talk about sleep,” said Alan (Dr. V) Vonder Harr, director of bedding at Miskelly Furniture, Pearl, Miss.\r\n\r\nInstead, he suggested a three-question approach — Fall, Stay, Feel — that can help sales associates maximize their positive impact on consumers’ sleep habits. “Ask them, ‘how well do you fall asleep,’ ‘how well do you stay asleep,’ and ‘how do you feel when you wake up,’” said Vonder Harr. “If you engage the consumer with these three questions, you can learn a lot. Then it’s mapping our features and benefits to those consumer needs.”\r\n\r\nBarrie Brown, CEO at Sleep Luxury Brands, Campbell, Calif., noted that consumers often bring misperceptions or misinformation along with them, and it’s important to consistently work through that to show them the product that actually best aligns with their needs.\r\n\r\n“It’s a process of show and tell; 80% of consumers come in and ask, ‘What’s the firmest mattress you have?’,” Brown said. “It’s a rookie mistake taking them straight to the firmest mattress. Start with the softest and work through the levels; show them what works best for them.”\r\n\r\nEven before that, however, panelists stressed the importance of training RSAs to think about sleep first and product features after, the reverse of what has been past practice. “Spec and tech” can often bring confusion or, with consumers who have already done their homework, alienate them by not recognizing where they are in the purchase journey. Instead, panelists advised connecting with the emotional side of consumers’ sleep journey.\r\n\r\n“What we need to do is sit down and find out what’s going on in their lives,” said Mary Van Orman, director of product strategy at Ergomotion. “Why are they there today? What problem are they trying to solve?”\r\n\r\nBilly Curtright, national sales manager for the U.S. at Magniflex, explained that selling the consumer on sleep often means selling the RSA on sleep or at least making sleep the focal point of training discussions. “At the end of the day, it’s about what is the result of getting a good eight hours of sleep,” he said. “It’s asking the right questions. ‘Do you wake up with a sore back;’ ‘Do you sleep with a partner who snores?’”\r\n\r\nPanelists all stressed the importance of focusing on sleep as a solution to a consumer problem, noting that the better RSAs are able identify the problem consumers are looking to solve and align that with the best mattress to address that need the better able they will be not only to close a sale, but also build a long-term customer relationship.\r\n\r\n“The data is so clear. If you can solve the problem that will allow them to imagine a better night’s sleep, they will absolutely spend more,” said Vonder Harr.',
    'img/news_why-bedding-experts-advise-selling-sleep-not-specs.jpg',
    'Why bedding experts advise selling sleep not specs',
    'bed',
    '2022-06-12 14:33:31'
  ),
  (
    24,
    'now-you-can-see-your-sofa-in-real-time-at-century-furniture',
    'Now you can see your sofa in real time at Century Furniture',
    'Jean Marie Layton',
    'GREENSBORO, N.C. –Century Furniture has partnered with Intiaro, a producer of 3D visualization technology, to launch an advanced product visualizer and configurator. The tool provides photorealistic visualization that allows every option of any customizable upholstery program to be selected and previewed by all parties: the manufacturer, interior designer or retailer and the end-consumer.\r\n\r\nAccording to the company, Intiaro’s 360 Advanced Configurator simplifies the process of configuring and visualizing furniture and helps to reduce errors in ordering, improves return rates and makes RSA product training quicker and easier.\r\n\r\n“Prior to Intiaro, we relied on catalog and tear sheets to try and convey the options sets. Intiaro provides an interactive, engaging and intuitive solution,” said Comer Wear, vice president of marketing for Century Furniture.\r\n\r\nUnderstanding the necessity for customers to see, in real time, different configurations for custom upholstery, Century decided to go with Intiaro’s solution. “Our partners – retailers and interior designers – and their customers need robust tools to help make complex products more easily understandable. It also helps us train and tether our partners and their customers to our brand. It makes us ‘sticky,’ and that’s powerful,” said Guy Holbrook, executive vice president of sales and marketing for Century.\r\n\r\nThe program includes a price configurator feature that changes as details for the custom upholstery is being developed. “The tool can also produce a high-quality rendering of the furniture for the consumer to take home, which is a strong way to reinforce the sale once they leave the store,” said Michal Stachowski, Intiaro’s chief visual officer. Intiaro also provides training for the program launch.\r\n\r\nCentury worked with Intiaro for almost two years to implement the system. Now live on the Century website, the tool will soon be available to more than 150 retailers.\r\n\r\nAccording to Intiaro, other furniture manufacturers such as Durham, Ethan Allen, Lexington Home Brands, Norwalk, Paul Robert and Rowe and Kravet have purchased its technology.',
    'img/news_now-you-can-see-your-sofa-in-real-time-at-century-furniture.jpg',
    'Now you can see your sofa in real time at Century Furniture',
    'chair',
    '2022-06-11 13:58:15'
  ),
  (
    40,
    '8-best-two-seater-sofas-to-cosy-up-on',
    '8 best two-seater sofas to cosy up on',
    'Ali Howard',
    'While we fully appreciate an expansive modular sofa to stretch out on, there’s something to be said about the intimacy of a two-seater – not least its space-saving properties. \r\n\r\nIt’s a compact piece of furniture that can easily slot into narrow sitting rooms to up a feeling of cosiness.\r\n\r\nIn larger living spaces a pair of two-seat sofas can create a homely focal point, either facing each other or forming an inviting L shape around the coffee table. They are versatile pieces that allow you to get creative with zoned areas.\r\n\r\nAnd thanks to their diminutive dimensions, a two-seat sofa – or smaller loveseat – isn’t just for the living room. \r\n\r\nIt can bring a cosy element to the conservatory, add a relaxing seating area to the bedroom, or even create a chill-out spot in an open-plan kitchen – ideal for those who love to cook and chat.',
    'img/news_8-best-two-seater-sofas-to-cosy-up-on.jpg',
    '8 best two-seater sofas to cosy up on',
    'chair',
    '2022-06-11 13:58:15'
  ),
  (
    41,
    '9-best-bedside-lamps-for-brightening-up-your-bedroom',
    '9 best bedside lamps for brightening up your bedroom',
    'Rachel Ogden',
    'Everyone’s bedside table is different. Some are stacked with must-read novels, others are home to trinket trays, scented oils, sleep masks or (whisper it) a phone stand. But the thing they should all have in common is a bedside lamp.\r\n\r\nA bedside lamp performs three main jobs. The first is to provide a good reading light, whether you prefer to settle in with a book, magazine or tablet. A less obvious function of a bedside lamp is to give the option of soft, diffused light that illuminates the room in the evening – ideal for unwinding before bed, watching TV or after stepping out of the tub.\r\n\r\nThe last task for a bedside lamp is to look fabulous while fulfilling the other roles.  Shades and bases add colour and texture without overwhelming the room and, should you have a double bed or larger, a pair of lamps will frame the furniture perfectly.\r\n\r\nSize matters – while some are blessed with surface space galore on a bedside unit, for most, a smaller lamp will be more practical, although we’ve included a few taller and wider options in our edit.\r\n\r\nThe factors we’ve considered are bulb type – standard bulbs will be cheaper and easier to source over a lamp’s lifespan, while energy saving bulb-compatible lamps are an eco win – as well as sturdiness, ease of switching on and off, and value for money. To help you make the decision about which bedside lamp might be right for your bedroom, our edit includes everything from stylish high street buys to decadent designer lights.',
    'img/news_9-best-bedside-lamps-for-brightening-up-your-bedroom.jpg',
    '9 best bedside lamps for brightening up your bedroom',
    'lamp',
    '2022-06-11 13:58:15'
  ),
  (
    42,
    '10-best-lampshades-that-will-inject-personality-into-your-living-space',
    '10 best lampshades that will inject personality into your living space',
    'Ali Howard',
    'A well-chosen lampshade, whether it sits pretty on a standard lamp, table lamp or hung from the ceiling, has the ability to transform a room in an instant, bringing a burst of character to the bedroom or living space. And you don’t need enormously deep pockets to snap up a design-led piece – many high street brands and smaller designer-makers offer striking, well-crafted lampshades at a fraction of the cost of their designer counterparts.\r\n\r\nWe’re spoilt for choice when it comes to materials, shapes, colours and patterns. Whether we’re after a shade that’s vintage-inspired, complete with elaborate fringing, one made from calming natural materials, or one that gives your room a vibrant colour pop, a good lampshade should emit softly diffused light for a cosy, ambient glow.\r\n\r\nLook for fabric styles with a lined interior if you want to contain the light and give out a consistent and measured radiance. Some are lined with a gold paint that further adds to the glow. Alternatively, you could choose a style designed to illuminate the room with pretty shadows, or one that deliberately shows off its interior industrial-style lightbulb.\r\n\r\nThe use of multiple light sources in a living room is easier on the eyes, so consider lampshades that offer directional light. A standard lamp with a downward gleam, for example, can give an appealing spotlight effect that’s perfect for reading.\r\n\r\n<h5>How we tested</h5>\r\n\r\nWe trialled our top ten lampshades in different areas of the house, and on a range of lamps – whether table or floor – to see how well they fared. We looked for quality of materials and craftsmanship, great design, and how well each one illuminated our spaces.',
    'img/news_10-best-lampshades-that-wil-inject-personality-into-your-living-space.jpg',
    '10 best lampshades that will inject personality into your living space',
    'lamp',
    '2022-06-11 14:00:44'
  ),
  (
    43,
    'carl-hansen-and-son-introduces-borge-mogensen-table-bench-in-a-shorter-version',
    'Carl Hansen and Son Introduces Borge Mogensen Table Bench in a Shorter Version',
    'Jean Marie Layton',
    'Carl Hansen & Son has unveiled the BM0488S Table Bench - a shorter version of Borge Mogensen\'s famous bench with the characteristic woven seat, understated details and precise craftsmanship.\r\n\r\nBorge Mogensen created the table bench in 1958 as part of his \'building furniture concept.\' Mogensen\'s philosophy was to design functional and durable furniture that can be adapted to changing needs of multiple locations.\r\n\r\nThe table bench is made of solid oak and double-woven canework, which lends the piece a solid but elegant expression. The rounded edges and beautiful mortise joints testify to the elaborate craftsmanship that characterizes Borge Mogensen\'s style\r\n\r\n\"Borge Mogensen was renowned for combining high quality with timeless design, and his bench is no exception,\" commented Knud Erik Hansen, CEO of Carl Hansen & Son. \"We are, therefore, pleased to be able to expand our collection from the well-known designer with a shorter version of the table bench.\"\r\n\r\nRead more: https://www.dexigner.com/news/33874\r\n\r\n',
    'img/news_carl-hansen-and-son-introduces-borge-mogensen-table-bench-in-a-shorter-version.jpg',
    'Carl Hansen and Son Introduces Borge Mogensen Table Bench in a Shorter Version',
    'table',
    '2022-06-12 14:36:36'
  ),
  (
    44,
    'giro-transforming-table-by-resource-furniture',
    'Giro Transforming Table by Resource Furniture',
    'Ali Howard',
    'Resource Furniture recently launched Giro, the transforming table, to help people make more use of their space while working from home.\r\n\r\nGiro pivots outward 90 degrees from the wall and unfolds itself to reveal a generous tabletop, ideal as a work surface or even a dining table for four. When it\'s not being used, it can be put right back into the wall, stored away as a shelving unit or filing cabinet.\r\n\r\nGiro is available in over 35 different lacquer finishes and features optional storage solutions, such as a file drawer.\r\n\r\nRead more: https://www.dexigner.com/news/33849\r\n\r\n',
    'img/news_giro-transforming-table-by-resource-furniture.jpg',
    'Giro Transforming Table by Resource Furniture',
    'table',
    '2022-06-11 13:58:15'
  );

-- --------------------------------------------------------
--
-- Table structure for table `product`
--
CREATE TABLE `product` (
  `uid` int(11) NOT NULL,
  `name` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `type` text COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT 'chair',
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 10
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_vietnamese_ci;

--
-- Dumping data for table `product`
--
INSERT INTO
  `product` (
    `uid`,
    `name`,
    `description`,
    `price`,
    `image`,
    `type`,
    `category`,
    `amount`
  )
VALUES
  (
    1,
    'Luxury Triangle Champ Side Table',
    'Luxury Triangle Champ side table for living room',
    9050000,
    'img/side_table_luxury_triangle_champ.png',
    'table',
    'side table',
    7
  ),
  (
    2,
    'Charme Black Side Table',
    'Charme Black side table for living room',
    7050000,
    'img/side_table_charme_black.png',
    'table',
    'side table',
    7
  ),
  (
    5,
    'Miami Dinner Table',
    'Miami dinner table for dining room',
    12900000,
    'img/dinner_table_miami.png',
    'table',
    'dinner table',
    10
  ),
  (
    6,
    'Pio Dinner Table',
    'Pio dinner table for dining room',
    12670000,
    'img/dinner_table_pio.png',
    'table',
    'dinner table',
    10
  ),
  (
    7,
    'Roma Dinner Table',
    'Roma dinner table for dining room',
    9720000,
    'img/dinner_table_roma.png',
    'table',
    'dinner table',
    10
  ),
  (
    8,
    'Porto Dinner Table',
    'Porto dinner table for dining room',
    25430000,
    'img/dinner_table_porto.png',
    'table',
    'dinner table',
    9
  ),
  (
    9,
    'Inox Makeup Table',
    'Inox makeup table for bedroom',
    13450000,
    'img/makeup_table_inox.png',
    'table',
    'makeup table',
    9
  ),
  (
    10,
    'Rattan Makeup Table',
    'Rattan makeup table for bedroom',
    24450000,
    'img/makeup_table_rattan.png',
    'table',
    'makeup table',
    10
  ),
  (
    11,
    'Skagen Makeup Table',
    'Skagen makeup table for bedroom',
    12700000,
    'img/makeup_table_skagen.png',
    'table',
    'makeup table',
    10
  ),
  (
    12,
    'Maxine Desk',
    'Maxine desk for work room',
    51940000,
    'img/desk_maxine.png',
    'table',
    'desk',
    10
  ),
  (
    13,
    'Osaka Desk',
    'Osaka desk for work room',
    22900000,
    'img/desk_osaka.png',
    'table',
    'desk',
    10
  ),
  (
    14,
    'Pio Desk',
    'Pio desk for work room',
    13650000,
    'img/desk_pio.png',
    'table',
    'desk',
    10
  ),
  (
    15,
    'Skagen Desk',
    'Skagen desk for work room',
    12670000,
    'img/desk_skagen.png',
    'table',
    'desk',
    10
  ),
  (
    16,
    'Miami Bed 1m2',
    'Miami Bed 1m2 for bedroom',
    15290000,
    'img/bed_1m2_miami.png',
    'bed',
    'bed 1m2',
    10
  ),
  (
    17,
    'Iris Bed 1m6',
    'Iris bed 1m6 for bedroom',
    14630000,
    'img/bed_1m6_iris.png',
    'bed',
    'bed 1m6',
    10
  ),
  (
    18,
    'Penny Bed 1m6',
    'Penny bed 1m6 for bedroom',
    14630000,
    'img/bed_1m6_penny.png',
    'bed',
    'bed 1m6',
    10
  ),
  (
    19,
    'Miami Bed 1m6',
    'Miami bed 1m6 for bedroom',
    17900000,
    'img/bed_1m6_miami.png',
    'bed',
    'bed 1m6',
    10
  ),
  (
    20,
    'Dubai Bed 1m6',
    'Dubai bed 1m6 for bedroom',
    14900000,
    'img/bed_1m6_dubai.png',
    'bed',
    'bed 1m6',
    10
  ),
  (
    21,
    'Iris Bed 1m8',
    'Iris bed 1m8 for bedroom',
    15610000,
    'img/bed_1m8_iris.png',
    'bed',
    'bed 1m8',
    10
  ),
  (
    22,
    'Penny Bed 1m8',
    'Penny bed 1m8 for bedroom',
    15610000,
    'img/bed_1m8_penny.png',
    'bed',
    'bed 1m8',
    10
  ),
  (
    23,
    'Miami Bed 1m8',
    'Miami bed 1m8 for bedroom',
    19900000,
    'img/bed_1m8_miami.png',
    'bed',
    'bed 1m8',
    10
  ),
  (
    24,
    'Skagen Bed 1m8',
    'Skagen bed 1m8 for bedroom',
    24450000,
    'img/bed_1m8_skagen.png',
    'bed',
    'bed 1m8',
    10
  ),
  (
    25,
    'Bench Atllo',
    'Bench atllo for bedroom',
    21590000,
    'img/bench_atllo.png',
    'chair',
    'benches',
    10
  ),
  (
    26,
    'Bench Elegance',
    'Bench elegance for bedroom',
    26770000,
    'img/bench_elegance.png',
    'chair',
    'benches',
    10
  ),
  (
    27,
    'Bench Miami',
    'Bench miami for bedroom',
    6200000,
    'img/bench_miami.png',
    'chair',
    'benches',
    10
  ),
  (
    28,
    'Bench Bridge',
    'Bench bridge for bedroom',
    29590000,
    'img/bench_bridge.png',
    'chair',
    'benches',
    10
  ),
  (
    29,
    'Albert Kuip Taupe Dining Chair ',
    'Albert kuip taupe dining chair for dining room',
    12300000,
    'img/dining_chair_albert_kuip_taupe.png',
    'chair',
    'dining chairs',
    10
  ),
  (
    30,
    'Kissy Dining Chair',
    'Kissy dining chair',
    4500000,
    'img/dining_chair_kissy.png',
    'chair',
    'dining chairs',
    10
  ),
  (
    31,
    'Rusty Dining Chair',
    'Rusty dining chair',
    12900000,
    'img/dining_chair_rusty.png',
    'chair',
    'dining chairs',
    10
  ),
  (
    32,
    'Carmen Dining Chair',
    'Carmen dining chair for dining room',
    12240000,
    'img/dining_chair_carmen.png',
    'chair',
    'dining chairs',
    10
  ),
  (
    33,
    'Royal Armchair',
    'Royal armchair for living room',
    11900000,
    'img/armchair_royal.png',
    'chair',
    'armchair',
    10
  ),
  (
    34,
    'Tudor Velvet Armchair',
    'Tudor velvet armchair for living room',
    23700000,
    'img/armchair_tudor_velvet.png',
    'chair',
    'armchair',
    10
  ),
  (
    35,
    'Garbo Armchair',
    'Garbo armchair for living room',
    12180000,
    'img/armchair_garbo.png',
    'chair',
    'armchair',
    10
  ),
  (
    36,
    'Hailey Armchair',
    'Hailey armchair for living room',
    23390000,
    'img/armchair_hailey.png',
    'chair',
    'armchair',
    10
  ),
  (
    37,
    'Lanora Work Chair',
    'Lanora work chair for work room',
    14200000,
    'img/work_chair_lanora.png',
    'chair',
    'work chair',
    10
  ),
  (
    38,
    'Bossy Work Chair',
    'Bossy work chair for work room',
    34290000,
    'img/work_chair_bossy.png',
    'chair',
    'work chair',
    10
  ),
  (
    39,
    'Franky Work Chair',
    'Franky work chair for work room',
    12800000,
    'img/work_chair_franky.png',
    'chair',
    'work chair',
    10
  ),
  (
    40,
    'Pinn Work Chair',
    'Pinn work chair for work room',
    25700000,
    'img/work_chair_pinn.png',
    'chair',
    'work chair',
    10
  ),
  (
    41,
    'Stone Ceiling Lamp',
    'Stone ceiling lamp for decorate',
    46350000,
    'img/ceiling_lamp_stone.png',
    'lamp',
    'ceiling lamp',
    10
  ),
  (
    42,
    'Beam Brass Ceiling Lamp',
    'Beam brass ceiling lamp for decorate',
    22590000,
    'img/ceiling_lamp_beam_brass.png',
    'lamp',
    'ceiling lamp',
    10
  ),
  (
    43,
    'Capello Ceiling Lamp',
    'Capello ceiling lamp for decorate',
    19540000,
    'img/ceiling_lamp_capello.png',
    'lamp',
    'ceiling lamp',
    10
  ),
  (
    44,
    'Tori Ceiling Lamp',
    'Tori ceiling lamp for decorate',
    6900000,
    'img/ceiling_lamp_tori.png',
    'lamp',
    'ceiling lamp',
    10
  ),
  (
    45,
    'Axe Floor Lamp',
    'Axe floor lamp for decorate',
    13650000,
    'img/floor_lamp_axe.png',
    'lamp',
    'floor lamp',
    10
  ),
  (
    46,
    'Fjella Floor Lamp',
    'Fjella floor lamp for decorate',
    11900000,
    'img/floor_lamp_fjella.png',
    'lamp',
    'floor lamp',
    10
  ),
  (
    47,
    'Vivana Floor Lamp',
    'Vivana floor lamp for decorate',
    7000000,
    'img/floor_lamp_vivana.png',
    'lamp',
    'floor lamp',
    10
  ),
  (
    48,
    'Suzette Floor Lamp',
    'Suzette floor lamp for decorate',
    13260000,
    'img/floor_lamp_suzette.png',
    'lamp',
    'floor lamp',
    10
  ),
  (
    49,
    'Charlie Standing Lamp',
    'Charlie standing lamp for workspace',
    6680000,
    'img/standing_lamp_charlie.png',
    'lamp',
    'standing lamp',
    10
  ),
  (
    50,
    'Lamelod Standing Lamp',
    'Lamelod standing lamp for living room',
    2990000,
    'img/standing_lamp_lamelod.png',
    'lamp',
    'standing lamp',
    10
  ),
  (
    51,
    'Thod Standing Lamp',
    'Thod standing lamp for living room',
    4950000,
    'img/standing_lamp_thod.png',
    'lamp',
    'standing lamp',
    10
  ),
  (
    52,
    'Wipid Standing Lamp',
    'Wipid standing lamp for living room',
    6990000,
    'img/standing_lamp_wipid.png',
    'lamp',
    'standing lamp',
    10
  ),
  (
    53,
    'Lombard Table Lamp',
    'Lombard table lamp for bedroom',
    17200000,
    'img/table_lamp_lombard.png',
    'lamp',
    'table lamp',
    10
  ),
  (
    54,
    'Fotellina Ant Brass Table Lamp',
    'Fotellina ant brass table lamp for workspace',
    36600000,
    'img/table_lamp_fotellina_ant_brass.png',
    'lamp',
    'table lamp',
    10
  ),
  (
    55,
    'Olympia Nickel Table Lamp',
    'Olympia nickel table lamp for workspace',
    19670000,
    'img/table_lamp_olympia_nickel.png',
    'lamp',
    'table lamp',
    10
  ),
  (
    56,
    'Champ Table Lamp',
    'Champ table lamp for workspace',
    6600000,
    'img/table_lamp_champ.png',
    'lamp',
    'table lamp',
    10
  );

-- --------------------------------------------------------
--
-- Table structure for table `product_comments`
--
CREATE TABLE `product_comments` (
  `id` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unread'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `product_comments`
--
INSERT INTO
  `product_comments` (
    `id`,
    `username`,
    `content`,
    `product_id`,
    `date`,
    `status`
  )
VALUES
  (
    22,
    'lamduong123',
    'Best product. I like it',
    1,
    '2022-06-12 15:52:46',
    'block'
  ),
  (
    23,
    'lamduong123',
    'Best product',
    33,
    '2022-06-13 13:18:22',
    'unread'
  ),
  (
    24,
    'lamduong123',
    'bad product',
    1,
    '2022-06-13 13:55:51',
    'unread'
  ),
  (
    25,
    'lamduong123',
    'HAI DANG HAHA',
    1,
    '2022-06-13 13:56:03',
    'read'
  ),
  (
    26,
    'lamduong123',
    'EM DEP LAM',
    1,
    '2022-06-13 13:56:10',
    'block'
  ),
  (
    27,
    'dang.416',
    'High quality. Love it\n',
    2,
    '2022-06-13 17:43:24',
    'unread'
  ),
  (
    28,
    'dang.416',
    'I will buy it again\n',
    2,
    '2022-06-13 17:43:36',
    'unread'
  ),
  (
    29,
    'dang.416',
    'Suit my house',
    11,
    '2022-06-13 17:44:05',
    'unread'
  );

-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT 'img/avatar.png'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--
INSERT INTO
  `users` (
    `uid`,
    `username`,
    `password`,
    `name`,
    `role`,
    `email`,
    `address`,
    `phone`,
    `image`
  )
VALUES
  (
    1,
    'admin',
    'admin',
    '',
    'admin',
    NULL,
    NULL,
    NULL,
    'img/avatar.png'
  ),
  (
    22,
    'lamduong123',
    '$2y$12$qVl2meoY3g1zEof0aIECP.FB.Q2RMTcyoHCdVEOLKdRUvA/R0yq66',
    'Lâm Thành Dương',
    'customer',
    'lamduong11201@gmail.com',
    'Ho Chi Minh, Viet Nam',
    '+84942826536',
    'uploads/avatar8.png'
  ),
  (
    23,
    'long',
    '$2y$12$9uKRz7/V4VYAw/k69lcVuuBkKeus..W3Hm/P5EgEpn3l07B.DkLS2',
    'Long Mai',
    'customer',
    'maiduclong11102001@gmail.com',
    NULL,
    NULL,
    'img/avatar.png'
  ),
  (
    29,
    'dang.416',
    '$2y$12$R/GX7ClP4rmRdzp/MtYhbeEwZYsDHJ//11qWRBHG96dV6tHBUijkS',
    'Nguyễn Trường Hải Đăng',
    'customer',
    'dangnguyen8877@gmail.com',
    NULL,
    NULL,
    'img/avatar4.png'
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `about_page`
--
ALTER TABLE
  `about_page`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `title` (`title`);

--
-- Indexes for table `belong`
--
ALTER TABLE
  `belong`
ADD
  KEY `123` (`cart_id`),
ADD
  KEY `321` (`product_id`);

--
-- Indexes for table `carousel`
--
ALTER TABLE
  `carousel`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `title` (`title`, `title2`);

--
-- Indexes for table `cart`
--
ALTER TABLE
  `cart`
ADD
  PRIMARY KEY (`id_cart`),
ADD
  KEY `12312312312312323` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE
  `category`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `name` (`name`);

--
-- Indexes for table `comment_post`
--
ALTER TABLE
  `comment_post`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `1231231231231231` (`username`),
ADD
  KEY `comment_user_ibfk_1123` (`id_post`);

--
-- Indexes for table `contact_page`
--
ALTER TABLE
  `contact_page`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE
  `feedback`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE
  `post`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `title` (`title`);

--
-- Indexes for table `product`
--
ALTER TABLE
  `product`
ADD
  PRIMARY KEY (`uid`),
ADD
  UNIQUE KEY `name` (`name`) USING HASH,
ADD
  KEY `123123123123123` (`category`);

--
-- Indexes for table `product_comments`
--
ALTER TABLE
  `product_comments`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `a` (`product_id`),
ADD
  KEY `comment_user_ibfk_1` (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE
  `users`
ADD
  PRIMARY KEY (`uid`),
ADD
  UNIQUE KEY `username` (`username`),
ADD
  UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `about_page`
--
ALTER TABLE
  `about_page`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 5;

--
-- AUTO_INCREMENT for table `carousel`
--
ALTER TABLE
  `carousel`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 5;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE
  `cart`
MODIFY
  `id_cart` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 61;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE
  `category`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 35;

--
-- AUTO_INCREMENT for table `comment_post`
--
ALTER TABLE
  `comment_post`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 10;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE
  `feedback`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE
  `product`
MODIFY
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 73;

--
-- AUTO_INCREMENT for table `product_comments`
--
ALTER TABLE
  `product_comments`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE
  `users`
MODIFY
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 30;

--
-- Constraints for dumped tables
--
--
-- Constraints for table `belong`
--
ALTER TABLE
  `belong`
ADD
  CONSTRAINT `123` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id_cart`) ON DELETE CASCADE,
ADD
  CONSTRAINT `321` FOREIGN KEY (`product_id`) REFERENCES `product` (`uid`);

--
-- Constraints for table `cart`
--
ALTER TABLE
  `cart`
ADD
  CONSTRAINT `12312312312312323` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

--
-- Constraints for table `comment_post`
--
ALTER TABLE
  `comment_post`
ADD
  CONSTRAINT `1231231231231231` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
ADD
  CONSTRAINT `comment_user_ibfk_1123` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE
  `product`
ADD
  CONSTRAINT `123123123123123` FOREIGN KEY (`category`) REFERENCES `category` (`name`);

--
-- Constraints for table `product_comments`
--
ALTER TABLE
  `product_comments`
ADD
  CONSTRAINT `a` FOREIGN KEY (`product_id`) REFERENCES `product` (`uid`) ON DELETE CASCADE,
ADD
  CONSTRAINT `comment_user_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;