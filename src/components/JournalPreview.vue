<template>
	<div class="journal-preview post border-gray-400 border-b">
		<h2>
			<g-link :to="post.node.path">{{ post.node.title }}</g-link>
		</h2>
		<div class="post-metadata">
			<span class="italics">{{ post.node.date }}</span>
			<span> &middot; </span>
			<reading-time :content="post.node.content"></reading-time>
		</div>

		<div class="post-preview">
			{{ post.node.description }}
		</div>

		<div class="read-more">
			<g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
		</div>
	</div> <!-- end post -->
</template>border-gray-400 border-b

<script>
import ReadingTime from './ReadingTime'
export default {
	props: {
		post: Object
	},
	components: {
		ReadingTime
	}
}
</script>

<style lang="scss" scoped>
.post {
	margin-bottom: 48px;
	border-bottom: 1px #ddd solid;
	font-size: 14px;
}

.italics {
	font-style: italic;
}

.post-metadata {
	color: rgb(70, 70, 70);
	margin-bottom: 12px;
}

.post-preview {
	font-size: 16px;
}

.read-more {
	margin: 16px 0 24px 0;
	text-transform: uppercase;
	transition: all 0.25s ease-in-out;

	&:hover {
		transform: translateX(5px);
		transition: all 0.25s ease-in-out;
	}
	
	a {
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 2px;
		color: #ff3f34;
		text-decoration: none;
	}
}

h2 {
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 5px;
	line-height: 1.1;

	a {
		text-decoration: none;
		color: #222222;
		transition: all 0.2s ease-in-out;
		&:hover {
			color: #ff3f34;
			transition: all 0.2s ease-in-out;
		}
	}
}
</style>