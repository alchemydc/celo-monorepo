import { InteractiveProposalBuilder, ProposalBuilder } from '@celo/governance/lib/proposals'
import { flags } from '@oclif/command'
import { writeFileSync } from 'fs-extra'
import { BaseCommand } from '../../base'
import { checkProposal } from '../../utils/governance'

export default class BuildProposal extends BaseCommand {
  static description = 'Interactively build a governance proposal'

  static flags = {
    ...BaseCommand.flags,
    output: flags.string({
      required: true,
      description: 'Path to output',
    }),
  }

  static examples = ['build-proposal --output ./transactions.json']

  async run() {
    const res = this.parse(BuildProposal)

    const builder = new ProposalBuilder(this.kit)

    // TODO: optimize builder redundancies

    const promptBuilder = new InteractiveProposalBuilder(builder)
    const output = await promptBuilder.promptTransactions()
    console.info(`Outputting proposal to ${res.flags.output}`)
    writeFileSync(res.flags.output!, JSON.stringify(output))

    output.forEach((tx) => builder.addJsonTx(tx))
    const proposal = await builder.build()

    await checkProposal(proposal, this.kit)
  }
}
