import { GithubLogo, Infinity } from '@phosphor-icons/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

function GitHubStargazer({ repository }: { repository: string }) {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        if (repository) {
            const today = format(new Date(), 'yyyy-MM-dd');
            const cachedData = localStorage.getItem(`stargazers:${repository}`);
            const cachedStars = JSON.parse(cachedData || '{}');

            if (cachedStars[today] !== undefined) {
                setStars(cachedStars[today]);
            } else {
                fetch(`https://api.github.com/repos/${repository}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const stars = data['stargazers_count'];

                        setStars(stars);

                        localStorage.setItem(
                            `stargazers:${repository}`,
                            JSON.stringify({
                                [today]: stars,
                            })
                        );
                    });
            }
        }
    }, [repository]);

    return (
        <span className="flex items-center gap-2">
            <GithubLogo className="h-5 w-5" />
            {stars < 1 ? (
                <Infinity className="h-4 w-4" />
            ) : (
                Intl.NumberFormat('en', {
                    notation: 'compact',
                    maximumFractionDigits: 1,
                }).format(stars)
            )}
        </span>
    );
}

export default GitHubStargazer;
