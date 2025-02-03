function skillsMember() {
  return {
    title: 'Skills',
    description: 'Skills of the member',
    type: new GraphQLList(SkillType),
    resolve: (member) => {
      return Skill.find({ memberId: member.id });
    }
  };
}