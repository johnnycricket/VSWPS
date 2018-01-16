<?php
/**
* @package VSWPS_Default
*/
get_header();
?>
<div class="page-main index">
  <?php while ( have_posts() ) : the_post();
    get_template_part('content', get_post_format() );

    if ( comments_open() || get_comments_number() ) :
      comments_template();
    endif;
  endwhile;
  next_post_link(); 
  previous_post_link();
  ?>
</div>
<?php get_footer(); ?>