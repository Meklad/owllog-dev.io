<?php

namespace App\Traits;

/**
 * This trait use as storage for query...
 */
trait MessageScope
{

	/**
	 * Get Messages for spicific conversation.
	 * 
	 * @param  stirng $query
	 * @param  array $participants
	 * @return QueryBuilder
	 */
    protected function scopeConversation(string $query, array $participants)
    {
        return $query->whereIn('user_id', $participants)->orderBy('created_at', 'DESC');
    }
}