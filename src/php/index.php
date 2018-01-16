<?php
/**
* @package VSWPS_Default
*/
get_header();
?>
<div class="page-main index">
  <?php while ( have_posts() ) : the_post();
    <article id="post-<?php the_ID(); ?>" <?php post_class( 'page-post' ); ?> >
    <?php if ( has_post_thumbnail() ) {?>
    <figure class="post-featured-image"><?php the_post_thumbnail('large'); ?></figure> 
    <?php } ?>
    <header class="post-header">
      <?php 
        the_title('<h1 class="post-title"><a href="' . esc_url( get_permalink() ) . '">', '</a></h1>'); 
      ?>
    </header>
    <div class="post-meta">
      <sub><?php the_time('F j, Y')?></sub>
      <sub><?php the_tags('')?></sub> 
    </div>
    <div class="post-content">
        <?php the_content(); ?>
    </div>
  </article>
  <?php
    if ( comments_open() || get_comments_number() ) :
      comments_template();
    endif;
  endwhile;
  next_post_link(); 
  previous_post_link();
  ?>
</div>
<?php get_footer(); ?>