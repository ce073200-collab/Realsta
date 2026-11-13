/**
 * Reusable TeamMemberCard component.
 * Receives a team member object as a prop.
 */
export default function TeamMemberCard({ member }) {
  return (
    <article className="team-card" aria-label={`${member.name}, ${member.role}`}>
      <div className="team-card__avatar" aria-hidden="true">{member.initials}</div>
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__role">{member.role}</p>
      <p className="team-card__bio">{member.bio}</p>
    </article>
  )
}

